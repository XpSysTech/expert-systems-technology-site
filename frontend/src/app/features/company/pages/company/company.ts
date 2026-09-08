import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CompanyPrinciple {
  readonly code: string;
  readonly statement: string;
  readonly title: string;
  readonly description: string;
  readonly action: string;
  readonly path: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-company',
  styleUrl: './company.scss',
  templateUrl: './company.html',
})
export class Company {
  protected readonly principles: readonly CompanyPrinciple[] = [
    {
      code: '01 / PRODUCTS',
      statement: 'We are building products around real operating work.',
      title: 'Focused products, developed with care.',
      description: 'Clinic OS and Help Me are in development around the workflows, records and decisions people depend on.',
      action: 'Explore products in development',
      path: '/products',
    },
    {
      code: '02 / SERVICES',
      statement: 'We operate the systems we build around agreed responsibility.',
      title: 'Managed Web Services, available now.',
      description: 'We design, launch, monitor, maintain and improve websites within a defined service scope.',
      action: 'Explore Managed Web Services',
      path: '/services',
    },
    {
      code: '03 / ENGINEERING',
      statement: 'We start with the operation, not a predetermined solution.',
      title: 'How we think about engineering.',
      description: 'Context, maintainability, responsible delivery and confidentiality are part of the work from the start.',
      action: 'Explore How We Work',
      path: '/company/how-we-work',
    },
    {
      code: '04 / TRUST',
      statement: 'Trust is part of the service boundary.',
      title: 'Security and responsibility belong together.',
      description: 'Access, continuity, recovery and accountable records should support the confidence people place in a system.',
      action: 'Security & Trust',
      path: '/company/security',
    },
    {
      code: '05 / PEOPLE',
      statement: 'We build with people who care about the operation.',
      title: 'Careers at XpSys',
      description: 'Work on systems whose quality, continuity and real-world consequence matter to the people using them.',
      action: 'Explore careers',
      path: '/company/careers',
    },
    {
      code: '06 / PARTNERS',
      statement: 'We collaborate where it improves delivery.',
      title: 'Partners and affiliations',
      description: 'Relationships should strengthen practical capability and create clearer outcomes for customers.',
      action: 'Explore partnerships',
      path: '/company/partners',
    },
  ];
}
