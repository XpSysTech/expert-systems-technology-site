import { routes } from './app.routes';

describe('application routes', () => {
  const hasRoute = (path: string): boolean => routes.some((route) => route.path === path);

  it('provides Products and Services directories and retires the Offerings page', () => {
    const retiredOfferingsRoute = routes.find((route) => route.path === 'offerings');

    expect(hasRoute('products')).toBe(true);
    expect(hasRoute('services')).toBe(true);
    expect(retiredOfferingsRoute?.redirectTo).toBe('services');
    expect(retiredOfferingsRoute?.loadComponent).toBeUndefined();
  });

  it('publishes Managed Web Services and redirects currently unavailable service routes', () => {
    expect(hasRoute('services/managed-web-services')).toBe(true);
    expect(hasRoute('services/managed-business-services')).toBe(true);
    expect(hasRoute('services/software-engineering')).toBe(true);
    expect(routes.find((route) => route.path === 'services/managed-business-services')?.redirectTo)
      .toBe('services/managed-web-services');
    expect(routes.find((route) => route.path === 'services/software-engineering')?.redirectTo)
      .toBe('services/managed-web-services');
  });

  it('provides all Managed Web Services classifications with unique SEO metadata', () => {
    const paths = [
      'services/managed-web-services',
      'services/managed-web-services/managed-website',
      'services/managed-web-services/managed-web-platform',
      'services/managed-web-services/managed-application',
    ];
    const managedRoutes = paths.map((path) => routes.find((route) => route.path === path));

    expect(managedRoutes.every((route) => typeof route?.title === 'string')).toBe(true);
    expect(managedRoutes.every((route) => typeof route?.data?.['description'] === 'string')).toBe(true);
    expect(new Set(managedRoutes.map((route) => route?.title)).size).toBe(paths.length);
    expect(new Set(managedRoutes.map((route) => route?.data?.['description'])).size).toBe(paths.length);
  });

  it('provides documentation and community routes within product and service micro-sites', () => {
    expect(hasRoute('products/clinic-os/documentation')).toBe(true);
    expect(hasRoute('products/help-me/community')).toBe(true);
    expect(hasRoute('services/managed-web-services/documentation')).toBe(true);
    expect(hasRoute('services/managed-web-services/community')).toBe(true);
  });

  it('provides completed legal and sitemap routes', () => {
    expect(hasRoute('legal/privacy')).toBe(true);
    expect(hasRoute('legal/terms')).toBe(true);
    expect(hasRoute('legal/accessibility')).toBe(true);
    expect(hasRoute('sitemap')).toBe(true);
  });

  it('provides dedicated company detail pages with their own public routes', () => {
    [
      'company/how-we-work', 'company/security', 'company/careers', 'company/partners', 'company/partners/partnership-models', 'company/partners/partner-with-us',
    ].forEach((path) => {
      const route = routes.find((candidate) => candidate.path === path);
      expect(route?.loadComponent).toBeDefined();
      expect(typeof route?.data?.['description']).toBe('string');
    });
  });

  it('publishes the About XpSys page with its own SEO description', () => {
    ['company', 'company/about'].forEach((path) => {
      const route = routes.find((candidate) => candidate.path === path);

      expect(typeof route?.title).toBe('string');
      expect(typeof route?.data?.['description']).toBe('string');
    });
  });

  it('includes client-information confidentiality in How We Work', () => {
    const route = routes.find((candidate) => candidate.path === 'company/how-we-work');
    const page = route?.data?.['companyPage'] as { items?: readonly { title: string; description: string }[] } | undefined;
    const confidentiality = page?.items?.find((item) => item.title === 'Request only what the work needs.');

    expect(confidentiality?.description).toContain('Access stays with the responsible team');
    expect(confidentiality?.description).toContain('non-public information is not shared without authorisation');
  });

  it('redirects legacy principles and engineering philosophy pages to How We Work', () => {
    ['company/principles', 'company/engineering-philosophy'].forEach((path) => {
      expect(routes.find((route) => route.path === path)?.redirectTo).toBe('company/how-we-work');
    });
  });

  it('publishes the careers landing page and four SEO-described subpages', () => {
    const paths = [
      'company/careers',
      'company/careers/open-positions',
      'company/careers/getting-hired',
      'company/careers/students-and-early-talent',
      'company/careers/life-at-expert-systems-technology',
    ];
    const careerRoutes = paths.map((path) => routes.find((route) => route.path === path));

    expect(careerRoutes.every((route) => route?.loadComponent)).toBe(true);
    expect(careerRoutes.every((route) => typeof route?.title === 'string')).toBe(true);
    expect(careerRoutes.every((route) => typeof route?.data?.['description'] === 'string')).toBe(true);
    expect(new Set(careerRoutes.map((route) => route?.title)).size).toBe(paths.length);
  });

  it('publishes the requested product microsite sections', () => {
    [
      'products/clinic-os/tour', 'products/clinic-os/compliance', 'products/clinic-os/roadmap',
      'products/clinic-os/early-access', 'products/help-me/tour', 'products/help-me/for-customers',
      'products/help-me/for-providers', 'products/help-me/trust-safety',
      'products/help-me/marketplace-operations', 'products/help-me/transparency',
      'products/help-me/roadmap', 'products/help-me/early-access',
    ].forEach((path) => expect(hasRoute(path)).toBe(true));
  });

  it('publishes Healthcare, Mining, Services and Waste Management industry routes', () => {
    ['industries/healthcare', 'industries/mining', 'industries/services', 'industries/waste-management']
      .forEach((path) => expect(hasRoute(path)).toBe(true));
  });
});
