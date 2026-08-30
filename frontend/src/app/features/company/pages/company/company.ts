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
      statement: 'We make software for real operations.',
      title: 'The workflow comes before the feature list.',
      description: 'Our products are shaped around the records, handoffs and decisions that people depend on every day.',
      action: 'Our products',
      path: '/products',
    },
    {
      code: '02 / RESPONSIBILITY',
      statement: 'We stay responsible beyond delivery.',
      title: 'Useful systems need accountable operation.',
      description: 'Managed services connect engineering, monitoring, support and measurable improvement over time.',
      action: 'Our services',
      path: '/services',
    },
    {
      code: '03 / ENGINEERING',
      statement: 'We meet the operation where it is.',
      title: 'Context is an engineering requirement.',
      description: 'We begin with people, constraints and existing systems, then design architecture around that reality.',
      action: 'Engineering philosophy',
      path: '/company/engineering-philosophy',
    },
    {
      code: '04 / TRUST',
      statement: 'We design for continuity and trust.',
      title: 'Security belongs inside the operating model.',
      description: 'Access, recovery, auditability and maintainability are part of the system—not a final checklist.',
      action: 'Security & Trust',
      path: '/company/security',
    },
    {
      code: '05 / PLACE',
      statement: 'We build from Namibia for consequential work.',
      title: 'Local understanding can support global standards.',
      description: 'We are building durable technology capability close to the institutions and communities it serves.',
      action: 'Our principles',
      path: '/company/principles',
    },
  ];
}
