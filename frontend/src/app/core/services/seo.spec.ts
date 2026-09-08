import { TestBed } from '@angular/core/testing';
import { Seo } from './seo';

describe('Seo', () => {
  let service: Seo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Seo);
  });

  it('normalizes canonical URLs to the configured public origin', () => {
    expect(service.canonicalFor('/services/managed-web-services/?source=test#scope')).toBe(
      'https://www.xpsystech.com/services/managed-web-services',
    );
  });

  it('applies a route title, description and one canonical link', () => {
    const route = {
      data: { description: 'Managed service description.' },
      firstChild: null,
      title: 'Managed Web Services | Expert Systems Technology',
    };

    service.apply(route, '/services/managed-web-services');
    service.apply(route, '/services/managed-web-services');

    expect(document.title).toBe('Managed Web Services | Expert Systems Technology');
    expect(document.head.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('Managed service description.');
    expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://www.xpsystech.com/services/managed-web-services',
    );
  });
});
