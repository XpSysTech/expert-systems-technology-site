import type { MicroResourcePageData, MicroResourceSection } from '../../../../shared/components/micro-resource-page/micro-resource-page';

type ProductSlug = 'clinic-os' | 'help-me';

const clinicStatus = [
  { label: 'Product status', value: 'In development' },
  { label: 'MVP target', value: 'January 2027, subject to readiness' },
  { label: 'Early access', value: 'Selected medical clinics and practices' },
] as const;

const helpStatus = [
  { label: 'Product status', value: 'In development' },
  { label: 'MVP early access', value: 'Rehoboth, target late September 2026' },
  { label: 'Availability note', value: 'Targets depend on readiness and testing' },
] as const;

const clinicCapabilities: readonly MicroResourceSection[] = [
  {
    code: '01 / PATIENT JOURNEY', title: 'Keep the patient record connected.',
    introduction: 'Capabilities are described as product direction. Release status is confirmed during early-access evaluation.',
    items: [
      { title: 'Patient management', description: 'Create, find and maintain a dependable patient identity and longitudinal history.', meta: 'CORE FOUNDATION' },
      { title: 'Scheduling & front desk', description: 'Coordinate appointments, arrival, visit status and follow-up work.', meta: 'MVP SCOPE' },
      { title: 'Clinical encounters', description: 'Capture assessment, vitals, diagnosis, treatment and practitioner context.', meta: 'MVP SCOPE' },
      { title: 'Prescriptions & care records', description: 'Keep prescriptions, documents and results connected to the relevant patient and encounter.', meta: 'MVP SCOPE' },
    ],
  },
  {
    code: '02 / PRACTICE CONTROL', title: 'Support accountable day-to-day operation.',
    items: [
      { title: 'Users & permissions', description: 'Give reception, practitioners and administrators access appropriate to their work.', meta: 'DESIGN TARGET' },
      { title: 'Audit & governance', description: 'Preserve traceable activity and support responsible review of sensitive records.', meta: 'DESIGN TARGET' },
      { title: 'Operational reporting', description: 'Turn clinic activity into useful information without presenting fabricated performance claims.', meta: 'IN DEVELOPMENT' },
    ],
  },
];

const helpCapabilities: readonly MicroResourceSection[] = [
  {
    code: '01 / CUSTOMERS', title: 'Move from a need to an agreed job.',
    items: [
      { title: 'Discover services', description: 'Browse categories, listings and provider profiles relevant to a local need.', meta: 'AVAILABLE IN CURRENT BUILD' },
      { title: 'Request & compare', description: 'Describe the work, receive quotations and compare the information that matters.', meta: 'IN DEVELOPMENT' },
      { title: 'Coordinate & complete', description: 'Carry accepted work through messaging, delivery, completion and a verified review.', meta: 'IN DEVELOPMENT' },
    ],
  },
  {
    code: '02 / PROVIDERS & OPERATIONS', title: 'Support providers and responsible marketplace operation.',
    items: [
      { title: 'Provider presence', description: 'Onboard, publish service listings and maintain a useful provider profile.', meta: 'AVAILABLE IN CURRENT BUILD' },
      { title: 'Quotations & jobs', description: 'Respond to requests, manage accepted jobs and build a service history.', meta: 'IN DEVELOPMENT' },
      { title: 'Trust, safety & oversight', description: 'Provide reporting, review, moderation, telemetry and audit foundations for marketplace operations.', meta: 'IN DEVELOPMENT' },
    ],
  },
];

const pages: Readonly<Record<string, Omit<MicroResourcePageData, 'brand' | 'basePath' | 'workflowPath'>>> = {
  'clinic-os/capabilities': { code: 'CLINIC OS / CAPABILITIES', title: 'Capabilities', introduction: 'A role-aware view of the clinical and administrative work Clinic OS is being built to support.', status: 'IN DEVELOPMENT', statusItems: clinicStatus, diagram: 'clinic-layers', diagramTitle: 'The Clinic OS capability stack.', diagramDescription: 'A conceptual architecture from clinic experience through governance, data and infrastructure.', sections: clinicCapabilities, ctaLabel: 'Join Clinic OS early access', ctaPath: '/products/clinic-os/early-access' },
  'clinic-os/tour': { code: 'CLINIC OS / PRODUCT TOUR', title: 'Product Tour', introduction: 'Follow the intended experience for reception, practitioners and practice administrators.', status: 'IN DEVELOPMENT', statusItems: clinicStatus, diagram: 'clinic-lifecycle', diagramTitle: 'The patient journey stays connected.', diagramDescription: 'A conceptual product tour organised around the longitudinal patient record.', sections: [
    { code: '01 / RECEPTION', title: 'Coordinate the visit.', items: [
      { title: 'Find or register', description: 'Locate the patient record or create a new identity.' }, { title: 'Schedule', description: 'Create an appointment with the right practitioner and context.' }, { title: 'Check in', description: 'Confirm arrival and make visit status visible.' }, { title: 'Close & follow up', description: 'Complete the administrative hand-off and next action.' },
    ] },
    { code: '02 / PRACTITIONER', title: 'Record care in context.', items: [
      { title: 'Review context', description: 'See relevant history before the encounter.' }, { title: 'Assess & record', description: 'Capture clinical observations, vitals and diagnosis.' }, { title: 'Treat', description: 'Record treatment, prescriptions and care decisions.' }, { title: 'Complete', description: 'Close the encounter with a clear patient record.' },
    ] },
    { code: '03 / ADMINISTRATION', title: 'Govern the practice.', items: [
      { title: 'Configure', description: 'Set up practice and workflow context.' }, { title: 'Invite & govern', description: 'Manage users, roles and appropriate access.' }, { title: 'Monitor & review', description: 'Review activity, audit context and operational information.' },
    ] },
  ], ctaLabel: 'Discuss early access', ctaPath: '/products/clinic-os/early-access' },
  'clinic-os/compliance': { code: 'CLINIC OS / COMPLIANCE', title: 'Compliance & Trust', introduction: 'A transparent view of design targets, implemented controls, evidence and assessment—without premature certification claims.', status: 'IN DEVELOPMENT', statusItems: clinicStatus, sections: [
    { code: '01 / CONTROL LANGUAGE', title: 'Use precise status, not badges.', items: [
      { title: 'Design target', description: 'A control or outcome the product architecture is intended to support.' }, { title: 'Control implemented', description: 'The control exists in the current product build.' }, { title: 'Evidence available', description: 'Supporting implementation or operational evidence can be reviewed.' }, { title: 'Assessment in progress', description: 'A relevant assessment is underway; this is not a certification claim.' },
    ] },
    { code: '02 / RELEVANT CONTEXT', title: 'Design with healthcare obligations in view.', items: [
      { title: 'Namibian professional context', description: 'Product and implementation decisions must account for applicable Namibian health-profession and recordkeeping obligations.' }, { title: 'Privacy & security principles', description: 'HIPAA safeguard expectations, GDPR principles and relevant ISO guidance can inform control design where applicable; they are not claimed as certifications.' }, { title: 'Shared responsibility', description: 'Clinic configuration, user behaviour, policy, device security and operational governance remain part of the customer responsibility boundary.' },
    ] },
  ], ctaLabel: 'Discuss governance requirements', ctaPath: '/contact' },
  'clinic-os/roadmap': { code: 'CLINIC OS / ROADMAP', title: 'Roadmap', introduction: 'A directional plan for selected-clinic early access and responsible product development. Dates remain conditional.', status: 'IN DEVELOPMENT', statusItems: clinicStatus, sections: [
    { code: '01 / BUILD NOW', title: 'Build and validate the clinical foundation.', items: [{ title: 'September 2026 onward', description: 'Patient, appointment, encounter, access and audit foundations are developed and tested with real workflow constraints.' }] },
    { code: '02 / MVP TARGET', title: 'Prepare a focused early-access release.', items: [{ title: 'January 2027 target', description: 'A selected-clinic MVP target, subject to product readiness, testing and regulatory review.' }] },
    { code: '03 / POST-MVP', title: 'Learn before broadening availability.', items: [{ title: 'February–March 2027 direction', description: 'Use early-access learning to improve reliability, workflows and implementation readiness before a wider market target.' }] },
  ], ctaLabel: 'Join early-access evaluation', ctaPath: '/products/clinic-os/early-access' },
  'clinic-os/resources': { code: 'CLINIC OS / RESOURCES', title: 'Resources', introduction: 'Evaluation material for clinic leaders, practitioners, administrators and technical reviewers.', status: 'IN DEVELOPMENT', sections: [
    { code: '01 / EVALUATE', title: 'Understand the intended product.', items: [{ title: 'Capability guide', description: 'Review the workflows and roles currently in product scope.' }, { title: 'Compliance & trust', description: 'Understand control language, evidence and the shared-responsibility boundary.' }, { title: 'Product roadmap', description: 'Review current targets and the conditions attached to them.' }] },
    { code: '02 / DOCUMENTATION', title: 'Prepare for responsible use.', items: [{ title: 'Role-oriented guidance', description: 'Documentation will be organised around reception, practitioner and administrator tasks.' }, { title: 'No placeholder downloads', description: 'Approved documents will be published when they are accurate and ready for external use.' }] },
  ], ctaLabel: 'Read Clinic OS documentation', ctaPath: '/docs/clinic-os' },
  'clinic-os/early-access': { code: 'CLINIC OS / EARLY ACCESS', title: 'Early Access', introduction: 'Clinic OS early access is intended for selected medical clinics and practices willing to evaluate workflows responsibly.', status: 'EVALUATION INTAKE', statusItems: clinicStatus, sections: [
    { code: '01 / FIT', title: 'Tell us about the operating environment.', items: [{ title: 'Practice context', description: 'Share clinic type, practitioner roles and the workflow problem you want to improve.' }, { title: 'Evaluation expectations', description: 'Participation is evaluated against product readiness, workflow fit, implementation capacity and governance needs.' }, { title: 'Protect patient information', description: 'Do not submit patient data, health records or other sensitive clinical information through a public enquiry form.' }] },
  ], ctaLabel: 'Contact the product team', ctaPath: '/contact' },
  'clinic-os/documentation': { code: 'CLINIC OS / DOCUMENTATION', title: 'Documentation', introduction: 'Role-oriented guidance for understanding, evaluating and eventually operating Clinic OS.', status: 'IN DEVELOPMENT', sections: [
    { code: '01 / RECEPTION', title: 'Coordinate appointments and visits.', items: [{ title: 'Patient identity', description: 'Guidance for finding or registering a patient without creating fragmented records.' }, { title: 'Appointments & arrival', description: 'Guidance for scheduling, check-in, visit state and follow-up.' }] },
    { code: '02 / PRACTITIONER', title: 'Record care in clinical context.', items: [{ title: 'Encounter workflow', description: 'Guidance for review, assessment, diagnosis, treatment and encounter completion.' }, { title: 'Prescriptions & documents', description: 'Guidance for keeping care records connected to the patient and encounter.' }] },
    { code: '03 / ADMINISTRATOR', title: 'Configure and govern the practice.', items: [{ title: 'Users & permissions', description: 'Guidance for assigning appropriate access by role.' }, { title: 'Audit & operations', description: 'Guidance for reviewing traceable activity and operational information.' }] },
  ], ctaLabel: 'Discuss Clinic OS evaluation', ctaPath: '/contact' },

  'help-me/capabilities': { code: 'HELP ME / CAPABILITIES', title: 'Capabilities', introduction: 'A status-aware view of the marketplace capabilities being built for customers, providers and operations teams.', status: 'IN DEVELOPMENT', statusItems: helpStatus, diagram: 'marketplace-layers', diagramTitle: 'The Help Me marketplace stack.', diagramDescription: 'A conceptual system view from customer and provider experiences through trust, operations, data and infrastructure.', sections: helpCapabilities, ctaLabel: 'Join Rehoboth early access', ctaPath: '/products/help-me/early-access' },
  'help-me/tour': { code: 'HELP ME / PRODUCT TOUR', title: 'Product Tour', introduction: 'See how a service need can move through discovery, agreement, delivery and verified review.', status: 'IN DEVELOPMENT', statusItems: helpStatus, diagram: 'marketplace-flow', diagramTitle: 'A structured path to completed work.', diagramDescription: 'The intended customer and provider journey, supported by marketplace operations.', sections: [
    { code: '01 / CUSTOMER', title: 'Find, compare and coordinate.', items: [{ title: 'Discover', description: 'Browse services and provider profiles.' }, { title: 'Request', description: 'Describe the work and relevant context.' }, { title: 'Agree', description: 'Review quotations and accept an appropriate provider.' }, { title: 'Complete & review', description: 'Confirm completion and leave feedback tied to the job.' }] },
    { code: '02 / PROVIDER', title: 'Publish, respond and deliver.', items: [{ title: 'Join', description: 'Create the provider identity and onboarding record.' }, { title: 'Publish', description: 'Present services through structured listings.' }, { title: 'Respond', description: 'Review requests and prepare quotations.' }, { title: 'Deliver & grow', description: 'Complete accepted work and build a service history.' }] },
    { code: '03 / OPERATIONS', title: 'Observe and act responsibly.', items: [{ title: 'Review', description: 'Understand activity that needs marketplace attention.' }, { title: 'Investigate', description: 'Use reporting, telemetry and audit foundations to establish context.' }, { title: 'Act & learn', description: 'Support users, improve controls and feed operational learning back into the product.' }] },
  ], ctaLabel: 'Join Rehoboth early access', ctaPath: '/products/help-me/early-access' },
  'help-me/for-customers': { code: 'HELP ME / FOR CUSTOMERS', title: 'For Customers', introduction: 'Find local service providers, compare useful information and keep the path to completed work clear.', status: 'IN DEVELOPMENT', sections: [
    { code: '01 / CUSTOMER OUTCOMES', title: 'Make a local service need easier to manage.', items: [{ title: 'Find', description: 'Discover providers relevant to the service you need.' }, { title: 'Compare', description: 'Review profiles, listings and available service context.' }, { title: 'Coordinate', description: 'Use requests, quotations and messaging to align expectations.' }, { title: 'Complete', description: 'Confirm the work and leave a review connected to a real job.' }, { title: 'Remember', description: 'Keep a usable record of requests, quotations and completed work.' }] },
  ], ctaLabel: 'Join customer early access', ctaPath: '/products/help-me/early-access' },
  'help-me/for-providers': { code: 'HELP ME / FOR PROVIDERS', title: 'For Providers', introduction: 'Build a useful local presence, respond to structured opportunities and carry accepted work through completion.', status: 'IN DEVELOPMENT', sections: [
    { code: '01 / PROVIDER JOURNEY', title: 'Turn service capability into a dependable marketplace presence.', items: [{ title: 'Join', description: 'Complete provider onboarding and establish the business profile.' }, { title: 'Publish', description: 'Create service listings customers can understand.' }, { title: 'Respond', description: 'Evaluate requests and prepare quotations.' }, { title: 'Deliver', description: 'Coordinate and complete accepted jobs.' }, { title: 'Build reputation', description: 'Develop a verified service history through completed work and reviews.' }] },
  ], ctaLabel: 'Join provider early access', ctaPath: '/products/help-me/early-access' },
  'help-me/trust-safety': { code: 'HELP ME / TRUST & SAFETY', title: 'Trust & Safety', introduction: 'Trust is treated as an operating system of identity, expectations, records, reporting and responsible intervention—not as a marketing badge.', status: 'IN DEVELOPMENT', sections: [
    { code: '01 / FOUNDATIONS', title: 'Design for accountable marketplace activity.', items: [{ title: 'Identity & profiles', description: 'Make the party behind a request or service presence clearer.' }, { title: 'Structured agreements', description: 'Preserve requests, quotations and accepted-job context.' }, { title: 'Verified reviews', description: 'Associate feedback with completed marketplace work where the product flow supports it.' }, { title: 'Reporting & operations', description: 'Provide foundations for reporting, moderation, investigation, telemetry and audit.' }] },
    { code: '02 / HONEST STATUS', title: 'Separate current foundations from planned controls.', items: [{ title: 'In development', description: 'Advanced verification, moderation interfaces, durable notifications, disputes and support-case workflows remain subject to product development and testing.' }] },
  ], ctaLabel: 'Read the product roadmap', ctaPath: '/products/help-me/roadmap' },
  'help-me/marketplace-operations': { code: 'HELP ME / MARKETPLACE OPERATIONS', title: 'Marketplace Operations', introduction: 'Operational tooling is being designed to help responsible teams observe, review, investigate, act and learn.', status: 'IN DEVELOPMENT', sections: [
    { code: '01 / OPERATE', title: 'Support the marketplace behind the interface.', items: [{ title: 'Observe', description: 'Understand system and marketplace activity through operational signals.' }, { title: 'Review', description: 'Bring reports and relevant records into a controlled review process.' }, { title: 'Investigate', description: 'Use audit and telemetry context to understand what happened.' }, { title: 'Act', description: 'Support users and apply appropriate marketplace controls.' }, { title: 'Learn', description: 'Use operational outcomes to improve product, policy and service quality.' }] },
  ], ctaLabel: 'Discuss marketplace operations', ctaPath: '/contact' },
  'help-me/partners': { code: 'HELP ME / PARTNERS', title: 'Partners & Affiliations', introduction: 'A future home for organisations that can strengthen local provider readiness, customer access and responsible marketplace growth.', status: 'EXPLORING', sections: [
    { code: '01 / COLLABORATION', title: 'Build the ecosystem carefully.', items: [{ title: 'Provider development', description: 'Explore collaboration that helps local providers present and deliver services effectively.' }, { title: 'Community access', description: 'Explore appropriate channels for local awareness and early-access participation.' }, { title: 'No implied affiliations', description: 'Organisations will be named here only after a relationship is formally agreed.' }] },
  ], ctaLabel: 'Discuss a potential partnership', ctaPath: '/contact' },
  'help-me/transparency': { code: 'HELP ME / TRANSPARENCY', title: 'Transparency', introduction: 'Product availability, marketplace controls and service claims should be understandable and verifiable.', status: 'IN DEVELOPMENT', sections: [
    { code: '01 / PUBLIC CLARITY', title: 'Say what exists, what is being built and what is still planned.', items: [{ title: 'Capability status', description: 'Use explicit labels such as available in current build, in development, planned and exploring.' }, { title: 'Marketplace measures', description: 'Publish performance or trust metrics only when they are based on real, governed data.' }, { title: 'Change notes', description: 'Document meaningful product and policy changes as the marketplace develops.' }] },
  ], ctaLabel: 'View current capabilities', ctaPath: '/products/help-me/capabilities' },
  'help-me/roadmap': { code: 'HELP ME / ROADMAP', title: 'Roadmap', introduction: 'A directional plan for Rehoboth MVP early access and responsible marketplace learning.', status: 'IN DEVELOPMENT', statusItems: helpStatus, sections: [
    { code: '01 / FOUNDATIONS', title: 'Strengthen the marketplace core.', items: [{ title: 'Current build', description: 'Discovery, listings, provider profiles, customer profiles, request and quotation foundations, jobs, reviews, onboarding, teams, telemetry and reporting foundations.' }] },
    { code: '02 / EARLY ACCESS', title: 'Validate an end-to-end local journey.', items: [{ title: 'Late September 2026 target', description: 'Rehoboth MVP early access is targeted subject to readiness and testing; it is not a guaranteed release date.' }] },
    { code: '03 / LATER CAPABILITY', title: 'Add depth only after the core works.', items: [{ title: 'Planned and exploring', description: 'Payments, disputes, advanced verification, moderation, geospatial ranking and deeper provider workspaces require further development and validation.' }] },
  ], ctaLabel: 'Join Rehoboth early access', ctaPath: '/products/help-me/early-access' },
  'help-me/resources': { code: 'HELP ME / RESOURCES', title: 'Resources', introduction: 'Current product information for customers, providers, partners and marketplace evaluators.', status: 'IN DEVELOPMENT', sections: [
    { code: '01 / EXPLORE', title: 'Understand the marketplace before joining.', items: [{ title: 'Customer guide', description: 'Review the intended path from discovery to completed work.' }, { title: 'Provider guide', description: 'Understand onboarding, listings, quotations and job delivery.' }, { title: 'Trust & safety', description: 'Review the current operating principles and honest capability status.' }, { title: 'Roadmap', description: 'See what is current, in development, planned or exploring.' }] },
  ], ctaLabel: 'Read Help Me documentation', ctaPath: '/docs/help-me' },
  'help-me/early-access': { code: 'HELP ME / EARLY ACCESS', title: 'Rehoboth Early Access', introduction: 'Help Me is preparing a focused MVP early-access programme for customers and local service providers in Rehoboth.', status: 'EARLY-ACCESS INTAKE', statusItems: helpStatus, sections: [
    { code: '01 / PARTICIPATE', title: 'Choose how you want to help shape the marketplace.', items: [{ title: 'Customers', description: 'Tell us what kinds of local services you need and how you currently find and coordinate providers.' }, { title: 'Service providers', description: 'Tell us what you offer, where you work and how you currently receive and manage customer requests.' }, { title: 'Selection & timing', description: 'Participation is evaluated against product readiness, geographic fit, marketplace balance and testing capacity.' }] },
  ], ctaLabel: 'Contact the Help Me team', ctaPath: '/contact' },
  'help-me/documentation': { code: 'HELP ME / DOCUMENTATION', title: 'Documentation', introduction: 'Task-oriented guidance for customers, providers and marketplace operations teams evaluating Help Me.', status: 'IN DEVELOPMENT', sections: [
    { code: '01 / CUSTOMERS', title: 'Request and coordinate local work.', items: [{ title: 'Discover & compare', description: 'Guidance for browsing services and understanding provider information.' }, { title: 'Request & agree', description: 'Guidance for describing work, reviewing quotations and accepting a provider.' }, { title: 'Complete & review', description: 'Guidance for confirming completion and leaving feedback tied to the job.' }] },
    { code: '02 / PROVIDERS', title: 'Present services and manage jobs.', items: [{ title: 'Onboarding & listings', description: 'Guidance for creating a provider presence and useful service listings.' }, { title: 'Quotations & delivery', description: 'Guidance for responding to requests and carrying accepted work through completion.' }] },
    { code: '03 / OPERATIONS', title: 'Operate the marketplace responsibly.', items: [{ title: 'Review & investigation', description: 'Guidance for using available reporting, telemetry and audit context.' }, { title: 'Capability status', description: 'Documentation distinguishes current-build capability from in-development, planned and exploratory work.' }] },
  ], ctaLabel: 'Join Rehoboth early access', ctaPath: '/products/help-me/early-access' },
};

const fallbackSections: readonly MicroResourceSection[] = [{
  code: '01 / CURRENT INFORMATION', title: 'Product information without placeholders.',
  items: [{ title: 'Contact the product team', description: 'This resource will be expanded when accurate, approved material is ready for public use.' }],
}];

export function productMicroPage(slug: ProductSlug, segment: string): MicroResourcePageData {
  const isClinic = slug === 'clinic-os';
  const configured = pages[`${slug}/${segment}`];
  const basePath = `/products/${slug}`;
  const title = segment.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
  return {
    brand: isClinic ? 'Clinic OS' : 'Help Me', basePath, workflowPath: `${basePath}/tour`,
    code: configured?.code ?? `${isClinic ? 'CLINIC OS' : 'HELP ME'} / ${title.toUpperCase()}`,
    title: configured?.title ?? title,
    introduction: configured?.introduction ?? `Current ${isClinic ? 'Clinic OS' : 'Help Me'} product information for external evaluation.`,
    status: configured?.status ?? 'IN DEVELOPMENT', statusItems: configured?.statusItems,
    diagram: configured?.diagram, diagramTitle: configured?.diagramTitle, diagramDescription: configured?.diagramDescription,
    sections: configured?.sections ?? fallbackSections,
    ctaLabel: configured?.ctaLabel ?? 'Contact the product team', ctaPath: configured?.ctaPath ?? '/contact',
  };
}
