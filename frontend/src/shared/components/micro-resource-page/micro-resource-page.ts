import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EqualCard, EqualCardContent } from '../equal-card/equal-card';
import { SectionNav, SectionNavItem } from '../section-nav/section-nav';

export interface MicroResourcePageData {
  readonly brand: string;
  readonly basePath: string;
  readonly code: string;
  readonly title: string;
  readonly introduction: string;
  readonly workflowPath: string;
}

const fallbackPage: MicroResourcePageData = {
  brand: 'Offering',
  basePath: '/offerings',
  code: 'RESOURCE / OVERVIEW',
  title: 'Offering resource',
  introduction: 'Supporting information for this Expert Systems Technology offering.',
  workflowPath: '/offerings',
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isMicroResourcePageData(value: unknown): value is MicroResourcePageData {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value['brand'] === 'string' &&
    typeof value['basePath'] === 'string' &&
    typeof value['code'] === 'string' &&
    typeof value['title'] === 'string' &&
    typeof value['introduction'] === 'string' &&
    typeof value['workflowPath'] === 'string'
  );
}

@Component({
  imports: [EqualCard, RouterLink, SectionNav],
  selector: 'app-micro-resource-page',
  styleUrl: './micro-resource-page.scss',
  templateUrl: './micro-resource-page.html',
})
export class MicroResourcePage {
  private readonly route = inject(ActivatedRoute);

  protected readonly content = this.readContent();
  protected readonly navigation: readonly SectionNavItem[] = [
    { label: 'Overview', path: this.content.basePath, exact: true },
    { label: 'Capabilities', path: `${this.content.basePath}/capabilities` },
    { label: 'How it works', path: this.content.workflowPath },
    { label: 'Documentation', path: `${this.content.basePath}/documentation` },
    { label: 'Case Studies', path: `${this.content.basePath}/case-studies` },
    { label: 'Downloads', path: `${this.content.basePath}/downloads` },
    { label: 'FAQs', path: `${this.content.basePath}/faqs` },
    { label: 'Community', path: `${this.content.basePath}/community` },
    { label: 'Company', path: '/company' },
  ];

  protected readonly cards: readonly EqualCardContent[] = [
    {
      code: '01 / PURPOSE',
      title: 'What this section covers',
      description: `Focused information about ${this.content.title.toLowerCase()} for ${this.content.brand}.`,
    },
    {
      code: '02 / USE',
      title: 'For evaluation and operation',
      description: 'Structured for decision-makers, operators and technical teams assessing the offering.',
      path: '/contact',
      action: 'Ask a question',
    },
    {
      code: '03 / CONTEXT',
      title: 'Connected to the company',
      description: 'Review our operating principles, engineering approach, security posture and long-term direction.',
      path: '/company',
      action: 'View company',
    },
  ];

  private readContent(): MicroResourcePageData {
    const page = this.route.snapshot.data['microPage'];
    return isMicroResourcePageData(page) ? page : fallbackPage;
  }
}
