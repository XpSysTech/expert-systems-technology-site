import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, InjectionToken } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import {
  ManagedEnquiryKind,
  ManagedEnquiryRequest,
  ManagedEnquiryResponse,
} from '../models/managed-web-services.models';

export type ManagedEnquiryDeliveryMode = 'whatsapp' | 'api';

export const MANAGED_ENQUIRY_DELIVERY_MODE = new InjectionToken<ManagedEnquiryDeliveryMode>(
  'MANAGED_ENQUIRY_DELIVERY_MODE',
  {
    factory: () => 'whatsapp',
    providedIn: 'root',
  },
);

const WHATSAPP_NUMBER = '264815732680';

const API_PATHS: Readonly<Record<ManagedEnquiryKind, string>> = {
  'managed-website': '/api/v1/enquiries/managed-website',
  'managed-application': '/api/v1/enquiries/managed-application',
  'managed-web-platform': '/api/v1/enquiries/managed-web-platform',
  callback: '/api/v1/enquiries/callback',
};

function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
  return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date);
}

function humanise(value: string): string {
  return value
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]/g, ' ')
    .replace(/^./, (first) => first.toUpperCase());
}

function serialiseValue(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString();
  }

  if (Array.isArray(value)) {
    return value.length === 0 ? 'None selected' : value.join(', ');
  }

  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }

  if (value === null || value === undefined || value === '') {
    return 'Not provided';
  }

  return String(value);
}

export function buildManagedEnquiryMessage(request: ManagedEnquiryRequest): string {
  const titles: Readonly<Record<ManagedEnquiryKind, string>> = {
    'managed-website': 'Managed Website project scope',
    'managed-web-platform': 'Managed Web Platform scope request',
    'managed-application': 'Managed Application consultation request',
    callback: 'Callback request',
  };
  const title = titles[request.kind];
  const lines: string[] = [title, ''];

  if (!isRecord(request.payload)) {
    return title;
  }

  for (const [sectionName, sectionValue] of Object.entries(request.payload)) {
    lines.push(humanise(sectionName).toUpperCase());

    if (isRecord(sectionValue)) {
      for (const [fieldName, fieldValue] of Object.entries(sectionValue)) {
        lines.push(`${humanise(fieldName)}: ${serialiseValue(fieldValue)}`);
      }
    } else {
      lines.push(serialiseValue(sectionValue));
    }

    lines.push('');
  }

  lines.push('No sensitive production data is included in this request.');
  return lines.join('\n');
}

@Injectable({ providedIn: 'root' })
export class ManagedEnquirySubmission {
  private readonly document = inject(DOCUMENT);
  private readonly http = inject(HttpClient);
  private readonly mode = inject(MANAGED_ENQUIRY_DELIVERY_MODE);

  submit(request: ManagedEnquiryRequest): Observable<ManagedEnquiryResponse> {
    if (this.mode === 'api') {
      const destination = API_PATHS[request.kind];
      return this.http
        .post<{ readonly enquiryId: string }>(destination, request.payload)
        .pipe(map((response) => ({ enquiryId: response.enquiryId, delivery: 'api', destination })));
    }

    const message = buildManagedEnquiryMessage(request);
    const destination = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    this.document.defaultView?.open(destination, '_blank', 'noopener,noreferrer');
    return of({ delivery: 'whatsapp', destination });
  }
}
