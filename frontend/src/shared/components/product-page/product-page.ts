import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConceptDiagram, ConceptDiagramKind } from '../concept-diagram/concept-diagram';
import { SectionNav, SectionNavItem } from '../section-nav/section-nav';

export type ProductKind = 'clinic-os' | 'pharmacy-os' | 'help-me';

interface ProductHighlight {
  readonly title: string;
  readonly description: string;
}

interface ProductPageConfig {
  readonly code: string;
  readonly name: string;
  readonly logo?: string;
  readonly descriptor: string;
  readonly statement: string;
  readonly description: string;
  readonly status: string;
  readonly availability: string;
  readonly highlights: readonly ProductHighlight[];
  readonly workflow: readonly string[];
  readonly audience: readonly string[];
  readonly diagram: ConceptDiagramKind;
  readonly diagramTitle: string;
  readonly diagramDescription: string;
  readonly earlyAccessLabel: string;
}

const productPages: Readonly<Record<ProductKind, ProductPageConfig>> = {
  'clinic-os': {
    code: 'PRODUCT / CLINIC MANAGEMENT SYSTEM',
    name: 'Clinic OS',
    logo: '/products/clinic-os-product-card.svg',
    descriptor: 'Clinic Management System',
    statement: 'Run the clinic. Keep the patient journey connected.',
    description: 'Clinic OS is being designed for clinical and administrative workflows, with a longitudinal patient record that connects appointments, encounters, care records and day-to-day practice operations.',
    status: 'IN DEVELOPMENT',
    availability: 'Early access is intended for selected medical clinics and practices. The current MVP target is January 2027, subject to product readiness, testing and regulatory review.',
    highlights: [
      { title: 'Patient management', description: 'Create and maintain a dependable patient identity and connected history.' },
      { title: 'Scheduling & visits', description: 'Coordinate appointments, arrival, consultation and follow-up.' },
      { title: 'Clinical encounters', description: 'Record assessment, diagnosis, treatment and care context.' },
      { title: 'Prescriptions & care records', description: 'Keep prescriptions, documents and results connected to the patient journey.' },
      { title: 'Practice operations', description: 'Support roles, permissions, audit and operational reporting.' },
    ],
    workflow: ['Onboard', 'Assess', 'Treat', 'Follow up', 'Monitor'],
    audience: ['Medical clinics', 'Private practices', 'Specialist practices', 'Multi-practitioner clinics'],
    diagram: 'clinic-lifecycle',
    diagramTitle: 'One patient journey, one connected history.',
    diagramDescription: 'A conceptual view of the clinical lifecycle anchored by a longitudinal record.',
    earlyAccessLabel: 'Join Clinic OS early access',
  },
  'pharmacy-os': {
    code: 'PRODUCT / PHARMACY OPERATIONS',
    name: 'Pharmacy OS',
    descriptor: 'Pharmacy Operations System',
    statement: 'Make every pharmacy workflow visible and connected.',
    description: 'Pharmacy OS is a product concept for connecting dispensing, inventory movement, customer care and management reporting in one operational record.',
    status: 'EXPLORING',
    availability: 'This product is not currently offered for sale. Register interest to help inform future product direction.',
    highlights: [
      { title: 'Dispensing workflows', description: 'Connect the steps and records involved in responsible dispensing.' },
      { title: 'Stock intelligence', description: 'Make inventory movement and replenishment needs easier to understand.' },
      { title: 'Customer records', description: 'Keep service context available to authorised pharmacy teams.' },
      { title: 'Performance reporting', description: 'Turn operational activity into useful management information.' },
    ],
    workflow: ['Receive', 'Dispense', 'Reconcile', 'Replenish', 'Report'],
    audience: ['Independent pharmacies', 'Pharmacy groups', 'Healthcare operators'],
    diagram: 'clinic-layers',
    diagramTitle: 'A connected pharmacy operating model.',
    diagramDescription: 'A conceptual product-layer view. It does not represent a released system.',
    earlyAccessLabel: 'Register product interest',
  },
  'help-me': {
    code: 'PRODUCT / NAMIBIA SERVICES MARKETPLACE',
    name: 'Help Me',
    logo: '/products/help-me-horizontal-logo.svg',
    descriptor: 'Help Me Namibia Services Marketplace',
    statement: 'Find local help. Turn a need into completed work.',
    description: 'Help Me is a Namibia-focused marketplace in development, connecting customers and service providers through discovery, profiles, requests, quotations, messaging, jobs, completion and verified reviews.',
    status: 'IN DEVELOPMENT',
    availability: 'MVP early access is planned for Rehoboth, with a target of late September 2026 subject to product readiness and testing.',
    highlights: [
      { title: 'Service discovery', description: 'Find providers by service need and location context.' },
      { title: 'Provider profiles', description: 'Compare the information that matters before making contact.' },
      { title: 'Requests & quotations', description: 'Describe the work and create a structured basis for agreement.' },
      { title: 'Jobs, completion & reviews', description: 'Carry accepted work through delivery, completion and verified feedback.' },
    ],
    workflow: ['Discover', 'Request', 'Quote', 'Arrange', 'Complete', 'Review'],
    audience: ['Customers who need local services', 'Namibian service providers', 'Marketplace operations teams'],
    diagram: 'marketplace-flow',
    diagramTitle: 'From a local need to completed work.',
    diagramDescription: 'A conceptual marketplace journey connecting customers, providers and responsible operations.',
    earlyAccessLabel: 'Join Rehoboth early access',
  },
};

@Component({
  imports: [ConceptDiagram, RouterLink, SectionNav],
  selector: 'app-product-page',
  styleUrl: './product-page.scss',
  templateUrl: './product-page.html',
})
export class ProductPage {
  readonly product = input.required<ProductKind>();
  protected readonly content = computed(() => productPages[this.product()]);
  protected readonly earlyAccessPath = computed(() => `/products/${this.product()}/early-access`);

  protected readonly sectionNavigation = computed<readonly SectionNavItem[]>(() => {
    const base = `/products/${this.product()}`;
    if (this.product() === 'clinic-os') {
      return [
        { label: 'Overview', path: base, exact: true }, { label: 'Capabilities', path: `${base}/capabilities` },
        { label: 'Product Tour', path: `${base}/tour` }, { label: 'Compliance', path: `${base}/compliance` },
        { label: 'Roadmap', path: `${base}/roadmap` }, { label: 'Resources', path: `${base}/resources` },
        { label: 'Documentation', path: '/docs/clinic-os' }, { label: 'Early Access', path: `${base}/early-access` },
      ];
    }
    if (this.product() === 'help-me') {
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
      { label: 'Workflows', path: `${base}/workflows` }, { label: 'Resources', path: `${base}/resources` },
    ];
  });
}
