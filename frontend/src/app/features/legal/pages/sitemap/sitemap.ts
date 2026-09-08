import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SitemapGroup { readonly title: string; readonly links: readonly { readonly label: string; readonly path: string }[]; }

@Component({ imports: [RouterLink], selector: 'app-sitemap', styleUrl: './sitemap.scss', templateUrl: './sitemap.html' })
export class Sitemap {
  protected readonly groups: readonly SitemapGroup[] = [
    { title: 'Products', links: [
      { label: 'All products', path: '/products' }, { label: 'Clinic OS', path: '/products/clinic-os' },
      { label: 'Pharmacy OS', path: '/products/pharmacy-os' }, { label: 'Help Me', path: '/products/help-me' },
    ] },
    { title: 'Managed Web Services', links: [
      { label: 'Managed Web Services overview', path: '/services/managed-web-services' },
      { label: 'Managed Website', path: '/services/managed-web-services/managed-website' },
      { label: 'Managed Web Platform', path: '/services/managed-web-services/managed-web-platform' },
      { label: 'Managed Application', path: '/services/managed-web-services/managed-application' },
    ] },
    { title: 'Industries and knowledge', links: [
      { label: 'Industries', path: '/industries' }, { label: 'Healthcare', path: '/industries/healthcare' },
      { label: 'Mining', path: '/industries/mining' }, { label: 'Services', path: '/industries/services' },
      { label: 'Waste Management', path: '/industries/waste-management' },
      { label: 'Insights', path: '/insights' }, { label: 'Articles', path: '/insights/articles' },
      { label: 'Resources', path: '/resources' }, { label: 'Documentation', path: '/docs' },
    ] },
    { title: 'Company and support', links: [
      { label: 'Company', path: '/company' }, { label: 'Careers', path: '/company/careers' },
      { label: 'Open positions', path: '/company/careers/open-positions' },
      { label: 'Getting hired', path: '/company/careers/getting-hired' },
      { label: 'Students & early talent', path: '/company/careers/students-and-early-talent' },
      { label: 'Life at Expert Systems Technology', path: '/company/careers/life-at-expert-systems-technology' },
      { label: 'Contact', path: '/contact' },
      { label: 'Privacy notice', path: '/legal/privacy' }, { label: 'Website terms', path: '/legal/terms' },
      { label: 'Accessibility', path: '/legal/accessibility' },
    ] },
  ];
}
