import { Route, Routes } from '@angular/router';
import type { DirectoryPageData } from '../shared/components/directory-page/directory-page';
import type { HubPageData } from '../shared/components/hub-page/hub-page';
import type { MicroResourcePageData } from '../shared/components/micro-resource-page/micro-resource-page';
import type { CompanyDetailPageData } from './features/company/pages/company-detail/company-detail';
import { productMicroPage } from './features/products/data/product-microsites.data';

const loadHubPage = () =>
  import('../shared/components/hub-page/hub-page').then((module) => module.HubPage);

const loadDirectoryPage = () =>
  import('../shared/components/directory-page/directory-page').then((module) => module.DirectoryPage);

const loadMicroResourcePage = () =>
  import('../shared/components/micro-resource-page/micro-resource-page').then((module) => module.MicroResourcePage);

const loadCompanyDetail = () =>
  import('./features/company/pages/company-detail/company-detail').then((module) => module.CompanyDetail);

const loadCareerDetail = () =>
  import('./features/company/careers/pages/career-detail/career-detail').then((module) => module.CareerDetail);

function hubRoute(path: string, page: HubPageData): Route {
  return {
    path,
    title: `${page.title} | Expert Systems Technology`,
    loadComponent: loadHubPage,
    data: { page },
  };
}

function directoryRoute(path: string, page: DirectoryPageData): Route {
  return {
    path,
    title: `${page.title} | Expert Systems Technology`,
    loadComponent: loadDirectoryPage,
    data: { directoryPage: page },
  };
}

function microResourceRoute(path: string, page: MicroResourcePageData): Route {
  return {
    path,
    title: `${page.title} | ${page.brand} | Expert Systems Technology`,
    loadComponent: loadMicroResourcePage,
    data: { microPage: page, description: page.introduction },
  };
}

function companyDetailRoute(path: string, page: CompanyDetailPageData, description: string): Route {
  return {
    path,
    title: `${page.title} | Expert Systems Technology`,
    data: { companyPage: page, description },
    loadComponent: loadCompanyDetail,
  };
}

function careerDetailRoute(path: string, careerPage: string, title: string, description: string): Route {
  return {
    path,
    title: `${title} | Careers | Expert Systems Technology`,
    data: { careerPage, description },
    loadComponent: loadCareerDetail,
  };
}

const engineering: HubPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / Software engineering',
  title: 'Engineer the system around the problem.',
  introduction: 'When existing software does not fit the operation, we design and build a system that does.',
  ctaLabel: 'Talk to an engineer',
  ctaPath: '/contact',
  items: [
    { code: '01 / DISCOVER', title: 'Requirements engineering', description: 'Understand the operation, its constraints, actors, decisions and measurable outcomes.', path: '/engineering/process' },
    { code: '02 / DESIGN', title: 'Architecture & data', description: 'Design maintainable systems, integration boundaries and durable operational data models.', path: '/engineering/architecture' },
    { code: '03 / BUILD', title: 'Custom software', description: 'Deliver secure applications and workflows with testing, observability and operational ownership.', path: '/engineering/custom-software' },
  ],
};

const industries: HubPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / Industries',
  title: 'Technology grounded in operating context.',
  introduction: 'Useful systems reflect the environment in which decisions, records and work actually happen.',
  items: [
    { code: '01 / HEALTH', title: 'Healthcare', description: 'Clinical workflows, patient records and connected operational visibility.', path: '/industries/healthcare' },
    { code: '02 / MINING', title: 'Mining', description: 'Workforce, asset, contractor and operational information across distributed environments.', path: '/industries/mining' },
    { code: '03 / SERVICES', title: 'Services', description: 'Customer work, service delivery, knowledge capture and accountable reporting.', path: '/industries/services' },
    { code: '04 / WASTE', title: 'Waste Management', description: 'Collection, routing, assets, service records and environmental accountability.', path: '/industries/waste-management' },
  ],
};

const industriesDirectory: DirectoryPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / INDUSTRIES',
  title: 'Industries',
  subtitle: 'Where we work',
  introduction: 'Technology becomes useful when it understands the operating environment.',
  items: [
    {
      code: '/0.1',
      marker: 'H',
      title: 'Healthcare',
      description: 'Connect care, records, dispensing and operational visibility.',
      path: '/industries/healthcare',
      action: 'Explore healthcare',
    },
    {
      code: '/0.2',
      marker: 'M',
      title: 'Mining',
      description: 'Coordinate workforce, assets, contractors and distributed operations.',
      path: '/industries/mining',
      action: 'Explore mining',
    },
    {
      code: '/0.3',
      marker: 'B',
      title: 'Services',
      description: 'Make customer work, delivery and management reporting visible.',
      path: '/industries/services',
      action: 'Explore services',
    },
    {
      code: '/0.4',
      marker: 'W',
      title: 'Waste Management',
      description: 'Connect collection, routing, assets, customer service and accountable reporting.',
      path: '/industries/waste-management',
      action: 'Explore waste management',
    },
  ],
};

const company: HubPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / Company',
  title: 'Built for long-term operational value.',
  introduction: 'Expert Systems Technology is a Namibian software, data and operational intelligence company.',
  items: [
    { code: '01 / COMPANY', title: 'About us', description: 'Our purpose, operating model and long-term direction.', path: '/company/about' },
    { code: '02 / PRINCIPLES', title: 'How we think', description: 'Build for operations, understand before automating and treat data as an operational asset.', path: '/company/principles' },
    { code: '03 / ENGINEERING', title: 'Engineering philosophy', description: 'Requirements, architecture, reliability, security and maintainability.', path: '/company/engineering-philosophy' },
    { code: '04 / TRUST', title: 'Security & Trust', description: 'How security, access, recovery and auditability shape our systems.', path: '/company/security' },
    { code: '05 / PEOPLE', title: 'Careers', description: 'Work on systems that serve real operations.', path: '/company/careers' },
    { code: '06 / ECOSYSTEM', title: 'Partners', description: 'Technology and delivery relationships that expand what we can build.', path: '/company/partners' },
  ],
};

const resources: HubPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / Resources',
  title: 'Technical depth when you need it.',
  introduction: 'Documentation, case studies, reports, downloads and answers for evaluators, operators and technical teams.',
  items: [
    { code: '01 / DOCS', title: 'Documentation', description: 'Product concepts, guides, configuration, integrations and troubleshooting.', path: '/docs' },
    { code: '02 / EVIDENCE', title: 'Case Studies', description: 'How systems and services perform in real operating environments.', path: '/case-studies' },
    { code: '03 / DOWNLOADS', title: 'Downloads', description: 'Reports, technical briefs and product material.', path: '/resources/downloads' },
    { code: '04 / SUPPORT', title: 'FAQs', description: 'Answers to common product, service and implementation questions.', path: '/resources/faqs' },
  ],
};

const insightSubpage: HubPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / Insights',
  title: 'What operations teach us.',
  introduction: 'Research, reports and practical commentary on software, data, AI and operational intelligence.',
  items: [
    { code: '01 / BLOG', title: 'Blog', description: 'Clear perspectives on building and operating useful systems.', path: '/insights/articles' },
    { code: '02 / RESEARCH', title: 'Research', description: 'Structured investigations into operational and technology questions.', path: '/insights/research' },
    { code: '03 / REPORTS', title: 'Reports', description: 'Evidence-led findings designed to support decisions.', path: '/insights/reports' },
    { code: '04 / NEWS', title: 'Company News', description: 'Product, partnership and company updates.', path: '/insights/news' },
  ],
};

const subpage: HubPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / Deep content',
  title: 'Operational detail, clearly structured.',
  introduction: 'This route is ready for the focused product, service, industry or knowledge content defined in the site architecture.',
  ctaLabel: 'Discuss this with us',
  ctaPath: '/contact',
  items: [
    { code: '01 / CONTEXT', title: 'Purpose', description: 'Explain the operating environment, user need and intended outcome.' },
    { code: '02 / SYSTEM', title: 'How it works', description: 'Describe workflows, actors, data, decisions and integration boundaries.' },
    { code: '03 / ASSURANCE', title: 'Security & delivery', description: 'Set clear expectations for implementation, governance and ongoing support.' },
  ],
};


const productDeepPaths: readonly string[] = [
  'products/clinic-os/capabilities',
  'products/clinic-os/workflows',
  'products/clinic-os/intelligence',
  'products/clinic-os/integrations',
  'products/clinic-os/security',
  'products/clinic-os/pricing',
  'products/clinic-os/customers',
  'products/clinic-os/resources',
  'products/clinic-os/faq',
  'products/clinic-os/get-started',
  'products/clinic-os/documentation',
  'products/clinic-os/case-studies',
  'products/clinic-os/downloads',
  'products/clinic-os/faqs',
  'products/clinic-os/community',
  'products/pharmacy-os/capabilities',
  'products/pharmacy-os/workflows',
  'products/pharmacy-os/intelligence',
  'products/pharmacy-os/integrations',
  'products/pharmacy-os/security',
  'products/pharmacy-os/pricing',
  'products/pharmacy-os/customers',
  'products/pharmacy-os/resources',
  'products/pharmacy-os/faq',
  'products/pharmacy-os/get-started',
  'products/pharmacy-os/documentation',
  'products/pharmacy-os/case-studies',
  'products/pharmacy-os/downloads',
  'products/pharmacy-os/faqs',
  'products/pharmacy-os/community',
  'products/help-me/capabilities',
  'products/help-me/how-it-works',
  'products/help-me/providers',
  'products/help-me/customers',
  'products/help-me/security',
  'products/help-me/resources',
  'products/help-me/faq',
  'products/help-me/documentation',
  'products/help-me/case-studies',
  'products/help-me/downloads',
  'products/help-me/faqs',
  'products/help-me/community',
];

interface MicroSiteConfig {
  readonly slug: string;
  readonly brand: string;
  readonly basePath: string;
  readonly workflowSegment: 'workflows' | 'how-it-works';
}

interface MicroSectionConfig {
  readonly segment: string;
  readonly label: string;
  readonly introduction: string;
}

const sharedMicroSections: readonly MicroSectionConfig[] = [
  { segment: 'capabilities', label: 'Capabilities', introduction: 'The core workflows, controls and outcomes supported by this offering.' },
  { segment: 'documentation', label: 'Documentation', introduction: 'Guidance for understanding, configuring and operating this offering.' },
  { segment: 'case-studies', label: 'Case Studies', introduction: 'Evidence and implementation stories from relevant operating environments.' },
  { segment: 'downloads', label: 'Downloads', introduction: 'Product briefs, service information and evaluation material in one place.' },
  { segment: 'faqs', label: 'Frequently Asked Questions', introduction: 'Clear answers to common evaluation, delivery and operational questions.' },
  { segment: 'community', label: 'Community', introduction: 'A place for customers, operators and partners to learn and exchange practical knowledge.' },
];

const productMicroSites: readonly MicroSiteConfig[] = [
  { slug: 'clinic-os', brand: 'Clinic OS', basePath: '/products/clinic-os', workflowSegment: 'workflows' },
  { slug: 'pharmacy-os', brand: 'Pharmacy OS', basePath: '/products/pharmacy-os', workflowSegment: 'workflows' },
  { slug: 'help-me', brand: 'Help Me', basePath: '/products/help-me', workflowSegment: 'how-it-works' },
];

const serviceMicroSites: readonly MicroSiteConfig[] = [
  { slug: 'managed-web-services', brand: 'Managed Web Services', basePath: '/services/managed-web-services', workflowSegment: 'how-it-works' },
];

function createMicroResourceRoutes(site: MicroSiteConfig): readonly Route[] {
  const sections: readonly MicroSectionConfig[] = [
    ...sharedMicroSections,
    {
      segment: site.workflowSegment,
      label: 'How it works',
      introduction: 'The workflow, responsibilities and delivery stages that connect the offering.',
    },
  ];

  return sections.map((section) =>
    microResourceRoute(`${site.basePath.slice(1)}/${section.segment}`, {
      brand: site.brand,
      basePath: site.basePath,
      code: `${site.brand.toUpperCase()} / ${section.label.toUpperCase()}`,
      title: section.label,
      introduction: section.introduction,
      workflowPath: `${site.basePath}/${site.workflowSegment}`,
    })
  );
}

const curatedProductSegments: Readonly<Record<'clinic-os' | 'help-me', readonly string[]>> = {
  'clinic-os': ['capabilities', 'tour', 'compliance', 'roadmap', 'resources', 'early-access', 'documentation', 'workflows', 'security', 'integrations', 'customers', 'intelligence', 'faq', 'faqs'],
  'help-me': ['capabilities', 'tour', 'for-customers', 'for-providers', 'trust-safety', 'marketplace-operations', 'partners', 'transparency', 'roadmap', 'resources', 'early-access', 'documentation', 'how-it-works', 'customers', 'providers', 'security', 'faq', 'faqs'],
};

const howWeWork: CompanyDetailPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / COMPANY / HOW WE WORK',
  title: 'How We Work',
  introduction: 'We begin with the real operation, make responsibility clear and build systems that can be operated and improved with confidence.',
  marker: 'W',
  items: [
    { code: '01 / PRINCIPLE', title: 'Start with the real work.', description: 'We understand the people, information, constraints and decisions involved before deciding what a system should change.' },
    { code: '02 / ENGINEERING', title: 'Design for durable change.', description: 'Architecture, data boundaries and integrations should make future improvement safer—not harder.' },
    { code: '03 / DELIVERY', title: 'Make responsibility clear.', description: 'Scope, ownership, service boundaries and the decisions needed to move forward are agreed before delivery begins.' },
    { code: '04 / OPERATION', title: 'Build for the operating environment.', description: 'Reliability, maintainability, monitoring and controlled change are considered as part of the work—not after launch.' },
    { code: '05 / CONFIDENTIALITY', title: 'Request only what the work needs.', description: 'We request only necessary information. Access stays with the responsible team, and non-public information is not shared without authorisation.' },
    { code: '06 / IMPROVEMENT', title: 'Learn through real use.', description: 'Useful systems improve through evidence, operational feedback and deliberate decisions about what matters next.' },
  ],
  ctaLabel: 'Discuss your project',
  ctaPath: '/contact',
  heroCtaLabel: 'Explore Managed Web Services',
  heroCtaPath: '/services/managed-web-services',
};

const securityAndTrust: CompanyDetailPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / COMPANY / TRUST',
  title: 'Security & Trust',
  introduction: 'Trust is part of the service boundary: responsible information handling, controlled access and clear operational responsibility.',
  marker: 'S',
  items: [
    { code: '01 / COMMITMENT', title: 'Handle information responsibly.', description: 'We treat responsible information handling, reliable operation and transparent boundaries as part of every engagement.' },
    { code: '02 / CONFIDENTIALITY', title: 'Protect confidential business context.', description: 'Processes, SOPs, commercial information, credentials and other non-public material are handled only as needed for agreed work.' },
    { code: '03 / MINIMISATION', title: 'Request less. Limit access.', description: 'We request only necessary information and limit access to the people responsible for delivering the work.' },
    { code: '04 / SECURITY', title: 'Apply practical service security.', description: 'Where included in the service, this can cover sensible hardening, HTTPS, dependency maintenance, access controls, backups, monitoring and controlled changes.' },
    { code: '05 / BOUNDARIES', title: 'Name responsibilities clearly.', description: 'We distinguish XpSys responsibilities from client and third-party platform responsibilities so the service boundary remains understandable.' },
    { code: '06 / COMMUNICATION', title: 'Communicate important changes.', description: 'Material service issues and planned changes are handled through clear communication within the agreed engagement.' },
    { code: '07 / LEGAL', title: 'Read the supporting policies.', description: 'Our public legal pages explain how website information is handled and how to raise accessibility or general enquiries.', linkLabel: 'View Privacy, Terms and Accessibility', linkPath: '/legal/privacy' },
  ],
  ctaLabel: 'Discuss security requirements',
  ctaPath: '/contact',
  heroCtaLabel: 'Contact XpSys about your project',
  heroCtaPath: '/contact',
};

const partners: CompanyDetailPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / COMPANY / PARTNERS',
  title: 'Partners',
  introduction: 'We work with partners when complementary capability makes delivery clearer, stronger and more useful for customers.',
  marker: 'P',
  items: [
    { code: '01 / WHY PARTNER', title: 'Complementary capability, disciplined delivery.', description: 'Partnerships matter when specialist expertise, technology or delivery capacity creates a clearer outcome for the customer.' },
    { code: '02 / WHO', title: 'For specialists who strengthen the work.', description: 'We welcome conversations with consultancies, implementation partners, domain experts, service providers, technology vendors and referral partners.' },
    { code: '03 / WAYS TO WORK', title: 'Choose a model that fits the work.', description: 'A relationship may involve referrals, delivery collaboration, product integration or shared industry capability.', linkLabel: 'Explore partnership models', linkPath: '/company/partners/partnership-models' },
    { code: '04 / PARTNERSHIP', title: 'Keep roles, scope and standards clear.', description: 'Good partnerships protect client confidentiality, respect each team, agree responsibilities and maintain the quality the work requires.' },
    { code: '05 / FOCUS', title: 'Focused on consequential operating work.', description: 'Our current areas of focus include healthcare, waste management, mining and services.', linkLabel: 'Explore industries', linkPath: '/industries' },
  ],
  ctaLabel: 'Partner with XpSys',
  ctaPath: '/company/partners/partner-with-us',
  heroCtaLabel: 'Start a partnership conversation',
  heroCtaPath: '/company/partners/partner-with-us',
};

const partnershipModels: CompanyDetailPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / COMPANY / PARTNERS / MODELS',
  title: 'Partnership Models',
  introduction: 'We choose the simplest collaboration model that makes responsibility clear and improves the customer outcome.',
  marker: 'M',
  items: [
    { code: '01 / REFERRAL', title: 'Referral partnerships.', description: 'Introduce work where XpSys is a strong fit, with clear expectations about the relationship and next steps.' },
    { code: '02 / DELIVERY', title: 'Delivery collaboration.', description: 'Combine complementary skills in a shared engagement while keeping scope, client communication and ownership clear.' },
    { code: '03 / TECHNOLOGY', title: 'Technology and integration partnerships.', description: 'Connect suitable platforms or specialist tools when they strengthen a customer system and the integration is supportable.' },
    { code: '04 / INDUSTRY', title: 'Industry and domain collaboration.', description: 'Work with organisations whose local context and domain expertise makes the solution more useful in practice.' },
  ],
  ctaLabel: 'Start a partnership conversation',
  ctaPath: '/company/partners/partner-with-us',
};

const curatedProductRoutes: readonly Route[] = (Object.entries(curatedProductSegments) as readonly ['clinic-os' | 'help-me', readonly string[]][])
  .flatMap(([slug, segments]) => segments.map((segment) => microResourceRoute(`products/${slug}/${segment}`, productMicroPage(slug, segment))));

const productMicroResourceRoutes: readonly Route[] = [
  ...curatedProductRoutes,
  ...productMicroSites.filter((site) => site.slug === 'pharmacy-os').flatMap(createMicroResourceRoutes),
];
const serviceMicroResourceRoutes: readonly Route[] = serviceMicroSites.flatMap(createMicroResourceRoutes);

const managedServiceDeepPaths: readonly string[] = [
  'managed-services/managed-web-services/what-we-manage',
  'managed-services/managed-web-services/how-it-works',
  'managed-services/managed-web-services/analytics',
  'managed-services/managed-web-services/security',
  'managed-services/managed-web-services/packages',
  'managed-services/managed-web-services/faq',
  'managed-services/managed-web-services/get-started',
  'managed-services/managed-business-operations/operations',
  'managed-services/managed-business-operations/intelligence',
  'managed-services/managed-business-operations/how-it-works',
  'managed-services/managed-business-operations/packages',
  'managed-services/managed-business-operations/security',
  'managed-services/managed-business-operations/faq',
  'managed-services/managed-business-operations/get-started',
];

const engineeringDeepPaths: readonly string[] = [
  'engineering/custom-software',
  'engineering/process',
  'engineering/architecture',
  'engineering/data-platforms',
  'engineering/integrations',
  'engineering/security',
  'engineering/case-studies',
  'engineering/contact',
];

export const routes: Routes = [
  {
    path: '',
    title: 'Expert Systems Technology | Software, Operations & Intelligence',
    loadComponent: () => import('../features/home/pages/home/home').then((module) => module.Home),
  },
  {
    path: 'offerings',
    pathMatch: 'full',
    redirectTo: 'services',
  },
  {
    path: 'services',
    pathMatch: 'full',
    redirectTo: 'services/managed-web-services',
  },
  {
    path: 'services/managed-web-services',
    title: 'Managed Web Services | Expert Systems Technology',
    data: {
      description: 'Managed websites, web platforms and applications developed and continuously operated by Expert Systems Technology.',
    },
    loadComponent: () => import('./features/services/managed-web-services/pages/overview/overview').then((module) => module.Overview),
  },
  {
    path: 'services/managed-web-services/managed-website',
    title: 'Managed Website | Expert Systems Technology',
    data: {
      description: 'A professionally developed company website with hosting, monitoring, maintenance and ongoing technical operation.',
    },
    loadComponent: () => import('./features/services/managed-web-services/pages/managed-website/managed-website').then((module) => module.ManagedWebsite),
  },
  {
    path: 'services/managed-web-services/managed-web-platform',
    title: 'Managed Web Platform | Expert Systems Technology',
    data: {
      description: 'A scoped monthly engagement for portals, booking systems, dashboards and authenticated database-backed web experiences.',
    },
    loadComponent: () => import('./features/services/managed-web-services/pages/managed-web-platform/managed-web-platform').then((module) => module.ManagedWebPlatform),
  },
  {
    path: 'services/managed-web-services/managed-application',
    title: 'Managed Application | Expert Systems Technology',
    data: {
      description: 'A custom monthly engagement for complex or business-critical applications requiring ongoing operational responsibility.',
    },
    loadComponent: () => import('./features/services/managed-web-services/pages/managed-application/managed-application').then((module) => module.ManagedApplication),
  },
  {
    path: 'services/managed-business-services',
    pathMatch: 'full',
    redirectTo: 'services/managed-web-services',
  },
  {
    path: 'services/software-engineering',
    pathMatch: 'full',
    redirectTo: 'services/managed-web-services',
  },
  ...serviceMicroResourceRoutes,
  {
    path: 'products',
    title: 'Products | Expert Systems Technology',
    data: { description: 'Explore Clinic OS and Help Me, two Expert Systems Technology products in development for healthcare operations and local service delivery in Namibia.' },
    loadComponent: () => import('./features/products/pages/products/products').then((module) => module.Products),
  },
  {
    path: 'products/clinic-os',
    title: 'Clinic OS | Expert Systems Technology',
    data: { description: 'Clinic OS is a clinic management system in development for connected patient journeys, clinical workflows and practice operations.' },
    loadComponent: () => import('./features/products/clinic-os/pages/overview/overview').then((module) => module.Overview),
  },
  {
    path: 'products/pharmacy-os',
    title: 'Pharmacy OS | Expert Systems Technology',
    data: { description: 'Pharmacy OS is an exploratory product concept for connected pharmacy operations and is not currently offered for sale.' },
    loadComponent: () => import('./features/products/pharmacy-os/pages/overview/overview').then((module) => module.Overview),
  },
  {
    path: 'products/help-me',
    title: 'Help Me Services Marketplace | Expert Systems Technology',
    data: { description: 'Help Me is a Namibia services marketplace in development, connecting customers and local providers from discovery through completed work.' },
    loadComponent: () => import('./features/products/help-me/pages/overview/overview').then((module) => module.Overview),
  },
  ...productMicroResourceRoutes,
  ...productDeepPaths.map((path) => {
    const [, slug, section] = path.split('/');
    const site = productMicroSites.find((candidate) => candidate.slug === slug) ?? productMicroSites[0];
    const label = section.split('-').map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`).join(' ');
    return microResourceRoute(path, {
      brand: site.brand,
      basePath: site.basePath,
      code: `${site.brand.toUpperCase()} / ${label.toUpperCase()}`,
      title: label === 'Faq' ? 'Frequently Asked Questions' : label,
      introduction: `${label} information for teams evaluating and operating ${site.brand}.`,
      workflowPath: `${site.basePath}/${site.workflowSegment}`,
    });
  }),
  { path: 'managed-services', pathMatch: 'full', redirectTo: 'services/managed-web-services' },
  { path: 'managed-services/managed-web-services', pathMatch: 'full', redirectTo: 'services/managed-web-services' },
  { path: 'managed-services/managed-business-operations', pathMatch: 'full', redirectTo: 'services/managed-web-services' },
  ...managedServiceDeepPaths.map((path): Route => ({ path, redirectTo: 'services/managed-web-services' })),
  hubRoute('engineering', engineering),
  ...engineeringDeepPaths.map((path) => hubRoute(path, engineering)),
  directoryRoute('industries', industriesDirectory),
  hubRoute('industries/healthcare', industries),
  hubRoute('industries/mining', { ...industries, eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / INDUSTRIES / MINING', title: 'Connect distributed mining work with dependable operational records.' }),
  hubRoute('industries/services', { ...industries, eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / INDUSTRIES / SERVICES', title: 'Make customer work and service delivery easier to operate.' }),
  hubRoute('industries/waste-management', { ...industries, eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / INDUSTRIES / WASTE MANAGEMENT', title: 'Coordinate collection, assets and accountable environmental service.' }),
  { path: 'industries/mining-resources', pathMatch: 'full', redirectTo: 'industries/mining' },
  { path: 'industries/professional-services', pathMatch: 'full', redirectTo: 'industries/services' },
  { path: 'industries/government', pathMatch: 'full', redirectTo: 'industries' },
  {
    path: 'insights',
    title: 'Insights | Expert Systems Technology',
    loadComponent: () => import('./features/insights/pages/insights/insights').then((module) => module.Insights),
  },
  {
    path: 'insights/articles',
    title: 'Blog | Expert Systems Technology',
    loadComponent: () => import('./features/insights/pages/articles/articles').then((module) => module.Articles),
  },
  {
    path: 'insights/blog',
    pathMatch: 'full',
    redirectTo: 'insights/articles',
  },
  hubRoute('insights/research', insightSubpage),
  hubRoute('insights/reports', insightSubpage),
  hubRoute('insights/news', insightSubpage),
  hubRoute('case-studies', { ...resources, eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / Case studies', title: 'Evidence from real operating environments.' }),
  hubRoute('resources', resources),
  hubRoute('resources/documentation', resources),
  hubRoute('resources/downloads', resources),
  hubRoute('resources/faqs', resources),
  hubRoute('resources/security', resources),
  hubRoute('docs', { ...resources, eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / Documentation', title: 'Understand, configure and operate our products.' }),
  microResourceRoute('docs/clinic-os', productMicroPage('clinic-os', 'documentation')),
  hubRoute('docs/pharmacy-os', subpage),
  microResourceRoute('docs/help-me', productMicroPage('help-me', 'documentation')),
  {
    path: 'company',
    title: 'Company | Expert Systems Technology',
    data: { description: 'Learn what Expert Systems Technology is building, how we work and how our products, managed web services and partnerships support real operations.' },
    loadComponent: () => import('./features/company/pages/company/company').then((module) => module.Company),
  },
  {
    path: 'company/about',
    title: 'About | Expert Systems Technology',
    data: { description: 'Learn what Expert Systems Technology is building, how we work and how our products, managed web services and partnerships support real operations.' },
    loadComponent: () => import('./features/company/pages/company/company').then((module) => module.Company),
  },
  companyDetailRoute('company/how-we-work', howWeWork, 'Learn how Expert Systems Technology combines practical operating principles and engineering discipline to build and improve dependable systems.'),
  { path: 'company/principles', pathMatch: 'full', redirectTo: 'company/how-we-work' },
  { path: 'company/engineering-philosophy', pathMatch: 'full', redirectTo: 'company/how-we-work' },
  companyDetailRoute('company/security', securityAndTrust, 'Learn how Expert Systems Technology approaches access, continuity, auditability and responsible system operation.'),
  {
    path: 'company/careers',
    title: 'Careers | Expert Systems Technology',
    data: { description: 'Explore careers, role types, recruiting information and working life at Expert Systems Technology in Namibia.' },
    loadComponent: () => import('./features/company/careers/pages/careers/careers').then((module) => module.Careers),
  },
  careerDetailRoute(
    'company/careers/open-positions',
    'open-positions',
    'Open Positions',
    'View current recruiting status and published career opportunities at Expert Systems Technology in Namibia.',
  ),
  careerDetailRoute(
    'company/careers/getting-hired',
    'getting-hired',
    'Getting Hired',
    'Learn what to expect from the role-relevant interview and hiring process at Expert Systems Technology.',
  ),
  careerDetailRoute(
    'company/careers/students-and-early-talent',
    'students-and-early-talent',
    'Students & Early Talent',
    'Learn how Expert Systems Technology approaches internships, graduate opportunities and early-career development.',
  ),
  careerDetailRoute(
    'company/careers/life-at-expert-systems-technology',
    'life-at-expert-systems-technology',
    'Life at Expert Systems Technology',
    'Learn about the working principles, communication, wellbeing and expectations that shape life at Expert Systems Technology.',
  ),
  companyDetailRoute('company/partners', partners, 'Learn how Expert Systems Technology approaches delivery partnerships and complementary capability.'),
  companyDetailRoute('company/partners/partnership-models', partnershipModels, 'Explore referral, delivery, technology and industry partnership models at Expert Systems Technology.'),
  {
    path: 'company/partners/partner-with-us',
    title: 'Partner With Us | Expert Systems Technology',
    data: { description: 'Start a partnership conversation with Expert Systems Technology by sharing your organisation, expertise and proposed collaboration.' },
    loadComponent: () => import('./features/company/pages/partner-with-us/partner-with-us').then((module) => module.PartnerWithUs),
  },
  {
    path: 'contact',
    title: 'Contact | Expert Systems Technology',
    loadComponent: () => import('./features/contact/pages/contact/contact').then((module) => module.Contact),
  },
  {
    path: 'legal/privacy',
    title: 'Privacy Notice | Expert Systems Technology',
    data: { policy: 'privacy', description: 'How Expert Systems Technology collects, uses, protects and retains information submitted through this website.' },
    loadComponent: () => import('./features/legal/pages/legal-page/legal-page').then((module) => module.LegalPage),
  },
  {
    path: 'legal/terms',
    title: 'Website Terms | Expert Systems Technology',
    data: { policy: 'terms', description: 'Terms that apply when using the Expert Systems Technology public website and submitting an enquiry.' },
    loadComponent: () => import('./features/legal/pages/legal-page/legal-page').then((module) => module.LegalPage),
  },
  { path: 'legal/cookies', pathMatch: 'full', redirectTo: 'legal/privacy' },
  {
    path: 'legal/accessibility',
    title: 'Accessibility | Expert Systems Technology',
    data: { policy: 'accessibility', description: 'The accessibility approach, current features and feedback channel for the Expert Systems Technology website.' },
    loadComponent: () => import('./features/legal/pages/legal-page/legal-page').then((module) => module.LegalPage),
  },
  {
    path: 'sitemap',
    title: 'Sitemap | Expert Systems Technology',
    data: { description: 'Browse the public pages for Expert Systems Technology products, managed web services, industries, insights and company information.' },
    loadComponent: () => import('./features/legal/pages/sitemap/sitemap').then((module) => module.Sitemap),
  },
  hubRoute('**', {
    eyebrow: 'ERROR / 404',
    title: 'This route does not exist.',
    introduction: 'The requested page may have moved or is not yet published.',
    ctaLabel: 'Return home',
    ctaPath: '/',
    items: [],
  }),
];
