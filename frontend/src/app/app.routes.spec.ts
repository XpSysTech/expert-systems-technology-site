import { routes } from './app.routes';

describe('application routes', () => {
  const hasRoute = (path: string): boolean => routes.some((route) => route.path === path);

  it('provides the Offerings, Products and Services directories', () => {
    expect(hasRoute('offerings')).toBe(true);
    expect(hasRoute('products')).toBe(true);
    expect(hasRoute('services')).toBe(true);
  });

  it('provides a standalone route for every service micro-site', () => {
    expect(hasRoute('services/managed-web-services')).toBe(true);
    expect(hasRoute('services/managed-business-services')).toBe(true);
    expect(hasRoute('services/software-engineering')).toBe(true);
  });

  it('provides documentation and community routes within product and service micro-sites', () => {
    expect(hasRoute('products/clinic-os/documentation')).toBe(true);
    expect(hasRoute('products/help-me/community')).toBe(true);
    expect(hasRoute('services/managed-web-services/documentation')).toBe(true);
    expect(hasRoute('services/software-engineering/community')).toBe(true);
  });
});
