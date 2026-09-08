import { ManagedServiceClassification, ResponsibilityRow } from '../models/managed-web-services.models';

export const MANAGED_SERVICE_CLASSIFICATIONS: readonly ManagedServiceClassification[] = [
  {
    code: '01 / WEBSITE',
    slug: 'managed-website',
    title: 'Managed Website',
    audience: 'Company, marketing and information websites.',
    summary: 'A professional web presence developed, hosted, monitored, maintained and improved as an ongoing service.',
    price: 'Indicative N$1,200–N$5,000+ monthly',
    action: 'Explore Managed Website',
  },
  {
    code: '02 / PLATFORM',
    slug: 'managed-web-platform',
    title: 'Managed Web Platform',
    audience: 'Portals, booking, dashboards, APIs and database-backed functionality.',
    summary: 'A scoped platform engagement for organisations that need authenticated workflows and connected services.',
    price: 'Scoped Monthly Engagement',
    action: 'Explore Managed Web Platform',
  },
  {
    code: '03 / APPLICATION',
    slug: 'managed-application',
    title: 'Managed Application',
    audience: 'Business-critical portals, SaaS products and operational systems.',
    summary: 'A custom engagement for complex systems that need dependable technical ownership and ongoing support.',
    price: 'Custom Monthly Engagement — Consultation Required',
    action: 'Explore Managed Application',
  },
];

export const MANAGED_OPERATION_STAGES: readonly string[] = [
  'Build',
  'Deploy',
  'Operate',
  'Monitor',
  'Maintain',
  'Improve',
];

export const MANAGED_RESPONSIBILITIES: readonly ResponsibilityRow[] = [
  { responsibility: 'Design / development', website: 'Included', platform: 'Included', application: 'Custom' },
  { responsibility: 'Hosting', website: 'Included', platform: 'Included', application: 'Custom' },
  { responsibility: 'SSL / DNS', website: 'Included', platform: 'Included', application: 'As Required' },
  { responsibility: 'Uptime monitoring', website: 'Included', platform: 'Included', application: 'Custom' },
  { responsibility: 'Maintenance', website: 'Included', platform: 'Included', application: 'Custom' },
  { responsibility: 'Content changes', website: 'Limited', platform: 'Limited', application: 'Not Typical' },
  { responsibility: 'APIs', website: 'Not Typical', platform: 'As Required', application: 'Custom' },
  { responsibility: 'Authentication', website: 'Not Typical', platform: 'As Required', application: 'Custom' },
  { responsibility: 'Database', website: 'Not Typical', platform: 'As Required', application: 'Custom' },
  { responsibility: 'Integrations', website: 'Limited', platform: 'As Required', application: 'Custom' },
  { responsibility: 'Telemetry', website: 'Limited', platform: 'Included', application: 'Custom' },
  { responsibility: 'Production infrastructure', website: 'Included', platform: 'Included', application: 'Custom' },
  { responsibility: 'Release management', website: 'Included', platform: 'Included', application: 'Custom' },
  { responsibility: 'Backup / restore', website: 'As Required', platform: 'As Required', application: 'Custom' },
  { responsibility: 'Capacity planning', website: 'Not Typical', platform: 'As Required', application: 'Custom' },
  { responsibility: 'Incident operations', website: 'Limited', platform: 'As Required', application: 'Custom' },
];

export const MANAGED_SERVICE_FAQS = [
  ['Is this a once-off website purchase?', 'No. Managed Web Services is a recurring operating relationship. The exact development, hosting and ongoing responsibilities are defined in the scoped engagement.'],
  ['Who owns the domain?', 'Domain registration, access and responsibilities are agreed during scope and recorded in the contract.'],
  ['What does monthly service include?', 'It includes the work agreed for your selected service and project scope, such as hosting, monitoring, maintenance, releases and support.'],
  ['Can I move an existing website?', 'Yes. We first assess the current technology, content, domain, hosting and migration risk.'],
  ['What happens if I need more functionality?', 'We assess whether the change fits the current scope or requires a revised platform or application engagement.'],
  ['What is the difference between Website, Platform and Application?', 'A Website presents public information, a Platform adds connected user workflows, and an Application supports complex or business-critical operations.'],
  ['How are content changes handled?', 'Content capacity and turnaround are defined in the service scope; complex changes may be quoted separately.'],
  ['What happens if I need a fully bespoke owned system?', 'That requires a separate contractual discussion about delivery, ownership, licensing and ongoing operation.'],
] as const;

export function platformMayFitManagedApplication(value: {
  readonly criticality: string;
  readonly integrations: string;
  readonly roles: readonly string[];
  readonly functions: readonly string[];
  readonly interactions: string;
}): boolean {
  const complexWorkflow = value.roles.includes('multiple roles') && value.functions.includes('workflow');
  const transactionHeavy = value.functions.includes('payments') && value.interactions === 'large volume';
  const productionIntegrations = value.integrations === 'multiple production integrations';
  return value.criticality === 'business critical' || complexWorkflow || transactionHeavy || productionIntegrations;
}
