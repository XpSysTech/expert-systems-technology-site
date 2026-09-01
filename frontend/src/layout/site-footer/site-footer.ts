import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterLink {
  readonly label: string;
  readonly path: string;
}

interface FooterGroup {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

@Component({
  imports: [RouterLink],
  selector: 'app-site-footer',
  styleUrl: './site-footer.scss',
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  protected readonly year = new Date().getUTCFullYear();

  protected readonly groups: readonly FooterGroup[] = [
    {
      title: 'Products & Services',
      links: [
        { label: 'Products', path: '/products' },
        { label: 'Clinic OS', path: '/products/clinic-os' },
        { label: 'Help Me', path: '/products/help-me' },
        { label: 'Services', path: '/services' },
        { label: 'Managed Web Services', path: '/services/managed-web-services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', path: '/company/about' },
        { label: 'Principles', path: '/company/principles' },
        { label: 'Security & Trust', path: '/company/security' },
        { label: 'Careers', path: '/company/careers' },
      ],
    },
    {
      title: 'Knowledge',
      links: [
        { label: 'Insights', path: '/insights' },
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'Resources', path: '/resources' },
        { label: 'Documentation', path: '/docs' },
      ],
    },
  ];
}
