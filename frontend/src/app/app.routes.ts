import { Route, Routes } from '@angular/router';
import type { DirectoryPageData } from '../shared/components/directory-page/directory-page';
import type { HubPageData } from '../shared/components/hub-page/hub-page';
import type { MicroResourcePageData } from '../shared/components/micro-resource-page/micro-resource-page';

const loadHubPage = () =>
  import('../shared/components/hub-page/hub-page').then((module) => module.HubPage);

const loadDirectoryPage = () =>
  import('../shared/components/directory-page/directory-page').then((module) => module.DirectoryPage);

const loadMicroResourcePage = () =>
  import('../shared/components/micro-resource-page/micro-resource-page').then((module) => module.MicroResourcePage);

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
    data: { microPage: page },
  };
}

const managedServices: HubPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / Managed services',
  title: 'Ongoing responsibility. Measurable improvement.',
  introduction: 'We operate digital and business workflows, capture what happens and continuously improve the service.',
  ctaLabel: 'Request a callback',
  ctaPath: '/contact',
  items: [
    { code: '01 / DIGITAL', title: 'Managed Web Services', description: 'Strategy, engineering, hosting, monitoring, maintenance, analytics and support as one managed service.', path: '/managed-services/managed-web-services' },
    { code: '02 / OPERATIONS', title: 'Managed Business Operations', description: 'Customer care, sales and software support operations with structured reporting and accountable service levels.', path: '/managed-services/managed-business-operations' },
    { code: '03 / MODEL', title: 'Operate and improve', description: 'Define responsibility, operate the workflow, capture activity, measure outcomes and improve the system.' },
  ],
};

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
    { code: '01 / HEALTH', title: 'Healthcare', description: 'Clinical workflows, patient records, dispensing, billing and operational visibility.', path: '/industries/healthcare' },
    { code: '02 / RESOURCES', title: 'Mining & Resources', description: 'Workforce, asset, contractor and operational information across distributed environments.', path: '/industries/mining-resources' },
    { code: '03 / BUSINESS', title: 'Professional Services', description: 'Customer work, service delivery, knowledge capture and management reporting.', path: '/industries/professional-services' },
    { code: '04 / PUBLIC', title: 'Government', description: 'Dependable workflows, public records, service delivery and accountable reporting.', path: '/industries/government' },
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
      title: 'Mining & Resources',
      description: 'Coordinate workforce, assets, contractors and distributed operations.',
      path: '/industries/mining-resources',
      action: 'Explore resources',
    },
    {
      code: '/0.3',
      marker: 'B',
      title: 'Professional Services',
      description: 'Make customer work, delivery and management reporting visible.',
      path: '/industries/professional-services',
      action: 'Explore services',
    },
    {
      code: '/0.4',
      marker: 'G',
      title: 'Government',
      description: 'Support dependable public workflows and accountable service delivery.',
      path: '/industries/government',
      action: 'Explore government',
    },
  ],
};

const offerings: DirectoryPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / OUR OFFERINGS',
  title: 'Our Offerings',
  introduction: 'Choose an owned product or an accountable service.',
  items: [
    {
      code: '/0.1',
      marker: 'P',
      title: 'Products',
      description: 'Operational software owned, supported and continuously improved by our teams.',
      path: '/products',
      action: 'Explore products',
    },
    {
      code: '/0.2',
      marker: 'S',
      title: 'Services',
      description: 'Managed operations and engineering with clear long-term responsibility.',
      path: '/services',
      action: 'Explore services',
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

const legalPage: HubPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / Legal',
  title: 'Clear terms for using this website.',
  introduction: 'This legal route is prepared for approved policy content. Final legal wording must be reviewed before publication.',
  items: [],
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
  { slug: 'managed-business-services', brand: 'Managed Business Services', basePath: '/services/managed-business-services', workflowSegment: 'how-it-works' },
  { slug: 'software-engineering', brand: 'Software Engineering Services', basePath: '/services/software-engineering', workflowSegment: 'how-it-works' },
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

const productMicroResourceRoutes: readonly Route[] = productMicroSites.flatMap(createMicroResourceRoutes);
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
  directoryRoute('offerings', offerings),
  {
    path: 'services',
    title: 'Services | Expert Systems Technology',
    loadComponent: () => import('./features/services/pages/services/services').then((module) => module.Services),
  },
  {
    path: 'services/managed-web-services',
    title: 'Managed Web Services | Expert Systems Technology',
    loadComponent: () => import('./features/services/managed-web-services/pages/overview/overview').then((module) => module.Overview),
  },
  {
    path: 'services/managed-business-services',
    title: 'Managed Business Services | Expert Systems Technology',
    loadComponent: () => import('./features/services/managed-business-services/pages/overview/overview').then((module) => module.Overview),
  },
  {
    path: 'services/software-engineering',
    title: 'Software Engineering Services | Expert Systems Technology',
    loadComponent: () => import('./features/services/software-engineering/pages/overview/overview').then((module) => module.Overview),
  },
  ...serviceMicroResourceRoutes,
  {
    path: 'products',
    title: 'Products | Expert Systems Technology',
    loadComponent: () => import('./features/products/pages/products/products').then((module) => module.Products),
  },
  {
    path: 'products/clinic-os',
    title: 'Clinic OS | Expert Systems Technology',
    loadComponent: () => import('./features/products/clinic-os/pages/overview/overview').then((module) => module.Overview),
  },
  {
    path: 'products/pharmacy-os',
    title: 'Pharmacy OS | Expert Systems Technology',
    loadComponent: () => import('./features/products/pharmacy-os/pages/overview/overview').then((module) => module.Overview),
  },
  {
    path: 'products/help-me',
    title: 'Help Me Services Marketplace | Expert Systems Technology',
    loadComponent: () => import('./features/products/help-me/pages/overview/overview').then((module) => module.Overview),
  },
  ...productMicroResourceRoutes,
  ...productDeepPaths.map((path) => hubRoute(path, subpage)),
  hubRoute('managed-services', managedServices),
  hubRoute('managed-services/managed-web-services', { ...managedServices, eyebrow: 'MANAGED SERVICE / WEB', title: 'Websites operated as dependable business infrastructure.' }),
  hubRoute('managed-services/managed-business-operations', { ...managedServices, eyebrow: 'MANAGED SERVICE / OPERATIONS', title: 'Structured customer, sales and support operations.' }),
  ...managedServiceDeepPaths.map((path) => hubRoute(path, subpage)),
  hubRoute('engineering', engineering),
  ...engineeringDeepPaths.map((path) => hubRoute(path, engineering)),
  directoryRoute('industries', industriesDirectory),
  hubRoute('industries/healthcare', industries),
  hubRoute('industries/mining-resources', industries),
  hubRoute('industries/professional-services', industries),
  hubRoute('industries/government', industries),
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
  hubRoute('docs/clinic-os', subpage),
  hubRoute('docs/pharmacy-os', subpage),
  hubRoute('docs/help-me', subpage),
  {
    path: 'company',
    title: 'Company | Expert Systems Technology',
    loadComponent: () => import('./features/company/pages/company/company').then((module) => module.Company),
  },
  {
    path: 'company/about',
    title: 'About | Expert Systems Technology',
    loadComponent: () => import('./features/company/pages/company/company').then((module) => module.Company),
  },
  hubRoute('company/principles', company),
  hubRoute('company/engineering-philosophy', company),
  hubRoute('company/security', company),
  hubRoute('company/careers', company),
  hubRoute('company/partners', company),
  {
    path: 'contact',
    title: 'Contact | Expert Systems Technology',
    loadComponent: () => import('./features/contact/pages/contact/contact').then((module) => module.Contact),
  },
  hubRoute('legal/privacy', legalPage),
  hubRoute('legal/terms', legalPage),
  hubRoute('legal/cookies', legalPage),
  hubRoute('legal/accessibility', legalPage),
  hubRoute('**', {
    eyebrow: 'ERROR / 404',
    title: 'This route does not exist.',
    introduction: 'The requested page may have moved or is not yet published.',
    ctaLabel: 'Return home',
    ctaPath: '/',
    items: [],
  }),
];
