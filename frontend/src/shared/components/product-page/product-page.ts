import { Component, computed, input, signal } from '@angular/core';
import { SectionNav, SectionNavItem } from '../section-nav/section-nav';

export type ProductKind = 'clinic-os' | 'pharmacy-os' | 'help-me';

interface ProductPageConfig {
  readonly code: string;
  readonly name: string;
  readonly statement: string;
  readonly description: string;
  readonly capabilities: readonly string[];
  readonly workflow: readonly string[];
  readonly audience: string;
  readonly isConsumerProduct: boolean;
}

const productPages: Readonly<Record<ProductKind, ProductPageConfig>> = {
  'clinic-os': {
    code: 'PRODUCT / CLINICAL OPERATIONS',
    name: 'Clinic OS',
    statement: 'One operating system for the work of the clinic.',
    description: 'Clinic OS connects appointments, encounters, clinical records, billing and operational reporting in a single dependable workflow.',
    capabilities: ['Patient administration', 'Clinical workflows', 'Billing & records', 'Operational intelligence'],
    workflow: ['Appointment', 'Encounter', 'Diagnosis', 'Prescription', 'Billing', 'Insight'],
    audience: 'Clinics, practices and distributed healthcare operations',
    isConsumerProduct: false,
  },
  'pharmacy-os': {
    code: 'PRODUCT / PHARMACY OPERATIONS',
    name: 'Pharmacy OS',
    statement: 'Make every pharmacy workflow visible and connected.',
    description: 'Pharmacy OS brings dispensing, inventory movement, customer care and management reporting into one operational record.',
    capabilities: ['Dispensing workflows', 'Stock intelligence', 'Customer records', 'Performance reporting'],
    workflow: ['Receive', 'Dispense', 'Reconcile', 'Replenish', 'Report', 'Improve'],
    audience: 'Independent pharmacies, groups and healthcare operators',
    isConsumerProduct: false,
  },
  'help-me': {
    code: 'PRODUCT / SERVICES MARKETPLACE',
    name: 'Help Me',
    statement: 'Find trusted local help. Turn a need into completed work.',
    description: 'Help Me connects customers with service providers and gives both sides a structured path from discovery to quotation, delivery and review.',
    capabilities: ['Service discovery', 'Provider profiles', 'Quotes & bookings', 'Messaging & job tracking'],
    workflow: ['Discover', 'Request', 'Quote', 'Arrange', 'Complete', 'Review'],
    audience: 'Customers and local service providers across Namibia',
    isConsumerProduct: true,
  },
};

@Component({
  imports: [SectionNav],
  selector: 'app-product-page',
  styleUrl: './product-page.scss',
  templateUrl: './product-page.html',
})
export class ProductPage {
  readonly product = input.required<ProductKind>();

  protected readonly content = computed(() => productPages[this.product()]);
  protected readonly sectionNavigation = computed<readonly SectionNavItem[]>(() => {
    const productPath = `/products/${this.product()}`;
    return [
      { label: 'Overview', path: productPath, exact: true },
      { label: 'Capabilities', path: `${productPath}/capabilities` },
      { label: 'Workflows', path: this.product() === 'help-me' ? `${productPath}/how-it-works` : `${productPath}/workflows` },
      { label: 'Documentation', path: `${productPath}/documentation` },
      { label: 'Case Studies', path: `${productPath}/case-studies` },
      { label: 'Downloads', path: `${productPath}/downloads` },
      { label: 'FAQs', path: `${productPath}/faqs` },
      { label: 'Community', path: `${productPath}/community` },
      { label: 'Company', path: '/company' },
    ];
  });
  protected readonly submitted = signal(false);

  protected submitEnquiry(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
  }
}
