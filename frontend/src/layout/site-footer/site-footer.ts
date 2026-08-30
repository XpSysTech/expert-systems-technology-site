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
      title: 'Offerings',
      links: [
        { label: 'All Offerings', path: '/offerings' },
        { label: 'Products', path: '/products' },
        { label: 'Services', path: '/services' },
        { label: 'Software Engineering', path: '/services/software-engineering' },
        { label: 'Industries', path: '/industries' },
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
