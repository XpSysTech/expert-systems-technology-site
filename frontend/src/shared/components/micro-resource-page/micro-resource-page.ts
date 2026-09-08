import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EqualCard, EqualCardContent } from '../equal-card/equal-card';
import { ConceptDiagram, ConceptDiagramKind } from '../concept-diagram/concept-diagram';
import { SectionNav, SectionNavItem } from '../section-nav/section-nav';

export interface MicroResourcePageData {
  readonly brand: string;
  readonly basePath: string;
  readonly code: string;
  readonly title: string;
  readonly introduction: string;
  readonly workflowPath: string;
  readonly status?: string;
  readonly diagram?: ConceptDiagramKind;
  readonly diagramTitle?: string;
  readonly diagramDescription?: string;
  readonly sections?: readonly MicroResourceSection[];
  readonly statusItems?: readonly MicroResourceStatus[];
  readonly ctaLabel?: string;
  readonly ctaPath?: string;
}

export interface MicroResourceSection {
  readonly code: string;
  readonly title: string;
  readonly introduction?: string;
  readonly items: readonly { readonly title: string; readonly description: string; readonly meta?: string }[];
}

export interface MicroResourceStatus {
  readonly label: string;
  readonly value: string;
}

interface OfferingProfile {
  readonly purpose: string;
  readonly capabilities: string;
  readonly assurance: string;
}

const offeringProfiles: Readonly<Record<string, OfferingProfile>> = {
  'Clinic OS': {
    purpose: 'A connected operating system for independent clinics to coordinate patient journeys, records, appointments and day-to-day administration.',
    capabilities: 'Patient and appointment workflows, clinical records, operational visibility and dependable hand-offs between clinic roles.',
    assurance: 'Designed around role-based access, accountable record keeping and the practical constraints of a working clinic.',
  },
  'Pharmacy OS': {
    purpose: 'An operational platform for pharmacy workflows, dispensing records, stock visibility and service coordination.',
    capabilities: 'Dispensing support, pharmacy records, inventory-aware workflows and operational reporting in one system context.',
    assurance: 'Built to support controlled access, traceable activity and reliable operation where accuracy matters.',
  },
  'Help Me': {
    purpose: 'A trusted service marketplace that helps people describe a need, find an appropriate provider and follow the work through.',
    capabilities: 'Structured requests, provider discovery, service coordination and clear progress for customers and providers.',
    assurance: 'Designed to make expectations, identity, communication and service responsibility easier to understand.',
  },
  'Managed Web Services': {
    purpose: 'A managed service for websites, web platforms and applications that need a team to build, launch and keep operating them.',
    capabilities: 'Design, development, hosting, monitoring, maintenance and measured improvement under one accountable engagement.',
    assurance: 'Scope, responsibilities and operational expectations are agreed before work starts, then reviewed throughout delivery.',
  },
};

const fallbackPage: MicroResourcePageData = {
  brand: 'Expert Systems Technology',
  basePath: '/',
  code: 'RESOURCE / OVERVIEW',
  title: 'Resource',
  introduction: 'Supporting information from Expert Systems Technology.',
  workflowPath: '/',
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
  imports: [ConceptDiagram, EqualCard, RouterLink, SectionNav],
  selector: 'app-micro-resource-page',
  styleUrl: './micro-resource-page.scss',
  templateUrl: './micro-resource-page.html',
})
export class MicroResourcePage {
  private readonly route = inject(ActivatedRoute);

  protected readonly content = this.readContent();
  protected readonly navigation: readonly SectionNavItem[] = this.createNavigation();

  protected readonly cards: readonly EqualCardContent[] = this.createCards();

  private readContent(): MicroResourcePageData {
    const page = this.route.snapshot.data['microPage'];
    return isMicroResourcePageData(page) ? page : fallbackPage;
  }

  private createCards(): readonly EqualCardContent[] {
    const profile = offeringProfiles[this.content.brand] ?? offeringProfiles['Managed Web Services'];
    const section = this.content.title.toLowerCase();
    const availability = section.includes('case')
      ? 'Public case studies will be added only after customer approval. Ask us for a relevant, non-confidential delivery discussion.'
      : section.includes('download')
        ? 'Approved briefs and evaluation material will be published here as they become available. We do not publish placeholder downloads.'
        : section.includes('communit')
          ? 'Customer and partner learning currently happens through direct engagement. A public community space is not yet available.'
          : profile.capabilities;

    return [
      { code: '01 / PURPOSE', title: `Why ${this.content.brand} exists`, description: profile.purpose },
      { code: '02 / SECTION', title: this.content.title, description: availability, path: '/contact', action: 'Discuss your requirements' },
      { code: '03 / ASSURANCE', title: 'Designed for responsible operation', description: profile.assurance, path: '/company', action: 'Read about XpSys' },
    ];
  }

  private createNavigation(): readonly SectionNavItem[] {
    const base = this.content.basePath;
    if (base.endsWith('/clinic-os')) {
      return [
        { label: 'Overview', path: base, exact: true }, { label: 'Capabilities', path: `${base}/capabilities` },
        { label: 'Product Tour', path: `${base}/tour` }, { label: 'Compliance', path: `${base}/compliance` },
        { label: 'Roadmap', path: `${base}/roadmap` }, { label: 'Resources', path: `${base}/resources` },
        { label: 'Documentation', path: '/docs/clinic-os' }, { label: 'Early Access', path: `${base}/early-access` },
      ];
    }
    if (base.endsWith('/help-me')) {
      return [
        { label: 'Overview', path: base, exact: true }, { label: 'Capabilities', path: `${base}/capabilities` },
        { label: 'Product Tour', path: `${base}/tour` }, { label: 'For Customers', path: `${base}/for-customers` },
        { label: 'For Providers', path: `${base}/for-providers` }, { label: 'Trust & Safety', path: `${base}/trust-safety` },
        { label: 'Roadmap', path: `${base}/roadmap` }, { label: 'Resources', path: `${base}/resources` },
        { label: 'Documentation', path: '/docs/help-me' }, { label: 'Early Access', path: `${base}/early-access` },
      ];
    }
    return [
      { label: 'Overview', path: base, exact: true }, { label: 'Capabilities', path: `${base}/capabilities` },
      { label: 'How it works', path: this.content.workflowPath }, { label: 'Documentation', path: `${base}/documentation` },
    ];
  }
}
