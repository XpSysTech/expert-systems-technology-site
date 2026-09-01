import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HomeAction {
  readonly label: string;
  readonly path: string;
}

interface ManagedWebClass {
  readonly code: string;
  readonly title: string;
  readonly summary: string;
  readonly commercialModel: string;
  readonly responsibilities: readonly string[];
  readonly primaryAction: HomeAction;
}

interface ProductInDevelopment {
  readonly code: string;
  readonly title: string;
  readonly summary: string;
  readonly path: string;
}

interface InsightFeature {
  readonly type: 'Article' | 'Case Study' | 'Note';
  readonly title: string;
  readonly summary: string;
  readonly path: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly operatingThesis: readonly string[] = [
    'Operations',
    'Data',
    'Information',
    'Insight',
    'Decision',
    'Improvement',
  ];

  protected readonly managedWebClasses: readonly ManagedWebClass[] = [
    {
      code: '01 / MANAGED WEBSITE',
      title: 'Managed Website',
      summary: 'Information and marketing websites operated as dependable business infrastructure.',
      commercialModel: 'N$1,200–N$5,000+ monthly',
      responsibilities: ['Design and development', 'Hosting, deployment and SSL', 'Monitoring, maintenance and support'],
      primaryAction: { label: 'Scope My Website', path: '/contact' },
    },
    {
      code: '02 / MANAGED WEB PLATFORM',
      title: 'Managed Web Platform',
      summary: 'Websites with lightweight application functionality, accounts, portals, APIs or integrations.',
      commercialModel: 'Scoped monthly engagement',
      responsibilities: ['Authentication and access', 'Application and data connectivity', 'Telemetry, backups and security'],
      primaryAction: { label: 'Scope My Platform', path: '/contact' },
    },
    {
      code: '03 / MANAGED APPLICATION',
      title: 'Managed Application',
      summary: 'Business-critical portals, systems and applications requiring deeper operational responsibility.',
      commercialModel: 'Consultation required',
      responsibilities: ['Production infrastructure', 'Release and incident management', 'Monitoring, recovery and capacity'],
      primaryAction: { label: 'Book a Consultation', path: '/contact' },
    },
  ];

  protected readonly managedWebProcess: readonly string[] = [
    'Consultation',
    'Classification',
    'Scope',
    'Design & Development',
    'Deployment',
    'Managed Operation',
  ];

  protected readonly products: readonly ProductInDevelopment[] = [
    {
      code: 'PRODUCT / 01',
      title: 'Clinic OS',
      summary: 'A clinic operating system being designed around clinical workflows, patient records, structured data capture and operational visibility.',
      path: '/products/clinic-os',
    },
    {
      code: 'PRODUCT / 02',
      title: 'Help Me',
      summary: 'A digital services marketplace being developed to connect customers with service providers through a structured platform.',
      path: '/products/help-me',
    },
  ];

  protected readonly healthcareKnowledge: readonly string[] = [
    'Industry Perspective',
    'Healthcare Showcase',
    'Case Studies',
    'Related Research',
  ];

  protected readonly insights: readonly InsightFeature[] = [
    {
      type: 'Article',
      title: 'Websites are operational systems, not digital brochures.',
      summary: 'Why uptime, security, change, measurement and ongoing responsibility matter after launch.',
      path: '/insights/articles',
    },
    {
      type: 'Case Study',
      title: 'Designing a healthcare website around trust and action.',
      summary: 'A practical look at healthcare information, clear journeys and dependable web operations.',
      path: '/case-studies',
    },
    {
      type: 'Note',
      title: 'Why Expert Systems Technology is starting narrow.',
      summary: 'Sell what exists, show what is being built and expand public claims only when capability is real.',
      path: '/company/about',
    },
  ];
}
