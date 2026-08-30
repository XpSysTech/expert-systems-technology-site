import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionNav, SectionNavItem } from '../section-nav/section-nav';

export type ServiceKind = 'managed-web-services' | 'managed-business-services' | 'software-engineering';

interface ServicePageConfig {
  readonly code: string;
  readonly name: string;
  readonly statement: string;
  readonly description: string;
  readonly capabilities: readonly string[];
  readonly process: readonly string[];
}

const servicePages: Readonly<Record<ServiceKind, ServicePageConfig>> = {
  'managed-web-services': {
    code: 'SERVICE / WEB OPERATIONS',
    name: 'Managed Web Services',
    statement: 'Your website, operated as dependable business infrastructure.',
    description: 'We combine strategy, engineering, hosting, monitoring, maintenance and analytics under one accountable service.',
    capabilities: ['Web strategy', 'Continuous delivery', 'Hosting & monitoring', 'Analytics & improvement'],
    process: ['Understand', 'Stabilise', 'Operate', 'Measure', 'Improve'],
  },
  'managed-business-services': {
    code: 'SERVICE / BUSINESS OPERATIONS',
    name: 'Managed Business Services',
    statement: 'Customer and support operations with responsibility built in.',
    description: 'We run structured customer care, sales and software support workflows with clear service levels and reporting.',
    capabilities: ['Customer care', 'Sales operations', 'Software support', 'Management reporting'],
    process: ['Define', 'Enable', 'Operate', 'Review', 'Improve'],
  },
  'software-engineering': {
    code: 'SERVICE / SOFTWARE ENGINEERING',
    name: 'Software Engineering Services',
    statement: 'Software engineered around the operation.',
    description: 'We translate operating context into requirements, architecture, integrations and dependable custom software.',
    capabilities: ['Requirements engineering', 'Solution architecture', 'Custom software', 'Systems integration'],
    process: ['Discover', 'Design', 'Build', 'Validate', 'Operate'],
  },
};

@Component({
  imports: [RouterLink, SectionNav],
  selector: 'app-service-page',
  styleUrl: './service-page.scss',
  templateUrl: './service-page.html',
})
export class ServicePage {
  readonly service = input.required<ServiceKind>();

  protected readonly content = computed(() => servicePages[this.service()]);
  protected readonly sectionNavigation = computed<readonly SectionNavItem[]>(() => {
    const servicePath = `/services/${this.service()}`;
    return [
      { label: 'Overview', path: servicePath, exact: true },
      { label: 'Capabilities', path: `${servicePath}/capabilities` },
      { label: 'How it works', path: `${servicePath}/how-it-works` },
      { label: 'Documentation', path: `${servicePath}/documentation` },
      { label: 'Case Studies', path: `${servicePath}/case-studies` },
      { label: 'Downloads', path: `${servicePath}/downloads` },
      { label: 'FAQs', path: `${servicePath}/faqs` },
      { label: 'Community', path: `${servicePath}/community` },
      { label: 'Company', path: '/company' },
    ];
  });
}
