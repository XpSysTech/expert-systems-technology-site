import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

export interface CompanyDetailItem {
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly linkLabel?: string;
  readonly linkPath?: string;
}

export interface CompanyDetailPageData {
  readonly eyebrow: string;
  readonly title: string;
  readonly introduction: string;
  readonly marker: string;
  readonly items: readonly CompanyDetailItem[];
  readonly ctaLabel: string;
  readonly ctaPath: string;
  readonly heroCtaLabel?: string;
  readonly heroCtaPath?: string;
}

const fallbackPage: CompanyDetailPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / COMPANY',
  title: 'Company information',
  introduction: 'Learn how Expert Systems Technology approaches responsible software, operations and long-term value.',
  marker: 'X',
  items: [],
  ctaLabel: 'Contact XpSys',
  ctaPath: '/contact',
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isCompanyDetailItem(value: unknown): value is CompanyDetailItem {
  return isRecord(value)
    && typeof value['code'] === 'string'
    && typeof value['title'] === 'string'
    && typeof value['description'] === 'string';
}

function isCompanyDetailPageData(value: unknown): value is CompanyDetailPageData {
  return isRecord(value)
    && typeof value['eyebrow'] === 'string'
    && typeof value['title'] === 'string'
    && typeof value['introduction'] === 'string'
    && typeof value['marker'] === 'string'
    && Array.isArray(value['items'])
    && value['items'].every(isCompanyDetailItem)
    && typeof value['ctaLabel'] === 'string'
    && typeof value['ctaPath'] === 'string'
    && (value['heroCtaLabel'] === undefined || typeof value['heroCtaLabel'] === 'string')
    && (value['heroCtaPath'] === undefined || typeof value['heroCtaPath'] === 'string');
}

@Component({
  imports: [RouterLink],
  selector: 'app-company-detail',
  styleUrl: './company-detail.scss',
  templateUrl: './company-detail.html',
})
export class CompanyDetail {
  private readonly route = inject(ActivatedRoute);
  protected readonly content = this.readContent();

  private readContent(): CompanyDetailPageData {
    const page = this.route.snapshot.data['companyPage'];
    return isCompanyDetailPageData(page) ? page : fallbackPage;
  }
}
