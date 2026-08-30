import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EqualCard } from '../equal-card/equal-card';

export interface HubPageItem {
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly path?: string;
  readonly action?: string;
  readonly expandable?: boolean;
}

export interface HubPageData {
  readonly eyebrow: string;
  readonly title: string;
  readonly introduction: string;
  readonly items: readonly HubPageItem[];
  readonly ctaLabel?: string;
  readonly ctaPath?: string;
}

const fallbackPage: HubPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / PUBLIC WEBSITE',
  title: 'Systems designed around real operations.',
  introduction: 'Explore Expert Systems Technology products, services and engineering capabilities.',
  items: [],
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isHubPageData(value: unknown): value is HubPageData {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value['eyebrow'] === 'string' &&
    typeof value['title'] === 'string' &&
    typeof value['introduction'] === 'string' &&
    Array.isArray(value['items'])
  );
}

@Component({
  imports: [EqualCard, RouterLink],
  selector: 'app-hub-page',
  styleUrl: './hub-page.scss',
  templateUrl: './hub-page.html',
})
export class HubPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly content = this.readContent();

  private readContent(): HubPageData {
    const page = this.route.snapshot.data['page'];
    return isHubPageData(page) ? page : fallbackPage;
  }
}
