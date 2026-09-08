import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  buildManagedEnquiryMessage,
  MANAGED_ENQUIRY_DELIVERY_MODE,
  ManagedEnquirySubmission,
} from './managed-enquiry-submission';

const platformRequest = {
  kind: 'managed-web-platform' as const,
  payload: {
    organisation: { organisation: 'Test Organisation', industry: 'Other', industryOther: 'Education' },
    platform: { platformTypes: ['other'], platformTypeOther: 'Volunteer portal' },
    users: { roles: ['staff'], estimatedUsers: '50' },
    functions: { requirements: ['other'], requirementOther: 'Shift allocation' },
    integrations: { existingSystems: 'None', thirdPartyApis: 'Not sure', paymentProviders: 'None', crmErp: 'None', unknown: true },
    data: { storedInformation: 'Member profiles', sensitiveDataExpected: false, migrationNeeds: 'None' },
    security: { loginRequired: true, rolesPermissions: true, mfaDesired: false, organisationOnly: true, mixedAreas: false },
    usage: { users: '50', interactions: 'not sure', geography: 'Namibia', criticality: 'standard' },
    existingSystems: { currentSystem: 'None', migrationRequired: false, hosting: 'None', database: 'Unknown' },
    contact: { name: 'Example Person', email: 'person@example.com', phone: '0810000000', preference: 'WhatsApp', consent: true },
  },
};

describe('ManagedEnquirySubmission', () => {
  it('retains Other values in the structured WhatsApp message', () => {
    const message = buildManagedEnquiryMessage(platformRequest);

    expect(message).toContain('Platform Type Other: Volunteer portal');
    expect(message).toContain('Requirement Other: Shift allocation');
    expect(message).toContain('Industry Other: Education');
  });

  it('returns a WhatsApp handoff URL in temporary delivery mode', () => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    const service = TestBed.inject(ManagedEnquirySubmission);

    service.submit(platformRequest).subscribe((result) => {
      expect(result.delivery).toBe('whatsapp');
      expect(result.destination).toContain('https://wa.me/264815732680');
      expect(decodeURIComponent(result.destination)).toContain('Volunteer portal');
    });
  });

  it('posts the typed payload when hosted API mode is enabled', () => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: MANAGED_ENQUIRY_DELIVERY_MODE, useValue: 'api' },
      ],
    });
    const service = TestBed.inject(ManagedEnquirySubmission);
    const http = TestBed.inject(HttpTestingController);

    service.submit(platformRequest).subscribe((result) => {
      expect(result).toEqual({
        delivery: 'api',
        destination: '/api/v1/enquiries/managed-web-platform',
        enquiryId: 'enquiry-1',
      });
    });

    const request = http.expectOne('/api/v1/enquiries/managed-web-platform');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(platformRequest.payload);
    request.flush({ enquiryId: 'enquiry-1' });
    http.verify();
  });
});
