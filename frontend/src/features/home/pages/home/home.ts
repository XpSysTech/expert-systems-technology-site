import { Component, computed, signal } from '@angular/core';
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
  readonly artwork?: string;
  readonly code: string;
  readonly title: string;
  readonly summary: string;
  readonly path: string;
}

interface InsightFeature {
  readonly type: 'Article' | 'Practical Guide' | 'Note';
  readonly title: string;
  readonly summary: string;
  readonly path: string;
  readonly action: string;
}

interface PartnerVoice {
  readonly id: string;
  readonly organisation: string;
  readonly person: string;
  readonly role: string;
  readonly quote: string;
  readonly image?: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly activePartnerVoice = signal(0);

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
      artwork: '/products/clinic-os-product-card.svg',
      code: 'PRODUCT / 01',
      title: 'Clinic OS',
      summary: 'A clinic operating system being designed around clinical workflows, patient records, structured data capture and operational visibility.',
      path: '/products/clinic-os',
    },
    {
      artwork: '/products/help-me-nam-product-card.svg',
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
      title: 'Your website is part of how your business operates.',
      summary: 'Availability, security, content changes and ongoing maintenance all matter after launch.',
      path: '/insights/articles',
      action: 'Read the article',
    },
    {
      type: 'Practical Guide',
      title: 'Designing a healthcare website around trust and action.',
      summary: 'Learn how clear information, accessible journeys and dependable operation help patients take the right next step.',
      path: '/insights/articles',
      action: 'Read the guide',
    },
    {
      type: 'Note',
      title: 'Why clear service boundaries lead to better websites.',
      summary: 'Defined scope, ownership and ongoing responsibility make delivery clearer and help the website remain dependable after launch.',
      path: '/insights/articles',
      action: 'Read the note',
    },
  ];

  // Replace these records with approved partner details and optional portrait paths.
  protected readonly partnerVoices: readonly PartnerVoice[] = [
    {
      id: 'partner-story-01',
      organisation: 'Partner story 01',
      person: 'Partner name',
      role: 'Role and organisation',
      quote: 'Add an approved account of the challenge, the collaboration and the outcome here.',
    },
    {
      id: 'partner-story-02',
      organisation: 'Partner story 02',
      person: 'Partner name',
      role: 'Role and organisation',
      quote: 'Add an approved perspective on what it is like to work with the XpSys team here.',
    },
    {
      id: 'partner-story-03',
      organisation: 'Partner story 03',
      person: 'Partner name',
      role: 'Role and organisation',
      quote: 'Add an approved example of the practical value created through the partnership here.',
    },
    {
      id: 'partner-story-04',
      organisation: 'Partner story 04',
      person: 'Partner name',
      role: 'Role and organisation',
      quote: 'Add an approved reflection on delivery, communication and shared responsibility here.',
    },
    {
      id: 'partner-story-05',
      organisation: 'Partner story 05',
      person: 'Partner name',
      role: 'Role and organisation',
      quote: 'Add an approved account of the result and what the organisation can do better now.',
    },
  ];

  protected readonly visiblePartnerVoices = computed(() => {
    const start = this.activePartnerVoice();

    return this.partnerVoices.map((_, offset) => this.partnerVoices[(start + offset) % this.partnerVoices.length]);
  });

  protected showPreviousPartnerVoice(): void {
    this.activePartnerVoice.update((current) =>
      (current - 1 + this.partnerVoices.length) % this.partnerVoices.length,
    );
  }

  protected showNextPartnerVoice(): void {
    this.activePartnerVoice.update((current) => (current + 1) % this.partnerVoices.length);
  }
}
