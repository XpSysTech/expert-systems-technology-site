import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HomeCard {
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly path: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly workModes: readonly HomeCard[] = [
    {
      code: '01 / PRODUCTS',
      title: 'Software products',
      description: 'Operational systems designed, owned and continuously improved by our team.',
      path: '/products',
    },
    {
      code: '02 / OPERATE',
      title: 'Managed services',
      description: 'Ongoing responsibility for digital and business operations, with measurable service levels.',
      path: '/managed-services',
    },
    {
      code: '03 / ENGINEER',
      title: 'Software engineering',
      description: 'Purpose-built systems for operations that cannot be solved with generic software.',
      path: '/engineering',
    },
  ];

  protected readonly products: readonly HomeCard[] = [
    {
      code: 'PRODUCT / 01',
      title: 'Clinic OS',
      description: 'A connected operating system for clinical workflows, records and practice intelligence.',
      path: '/products/clinic-os',
    },
    {
      code: 'PRODUCT / 02',
      title: 'Pharmacy OS',
      description: 'Operational software for dispensing, inventory, customer care and pharmacy performance.',
      path: '/products/pharmacy-os',
    },
    {
      code: 'PRODUCT / 03',
      title: 'Help Me',
      description: 'A service marketplace connecting people who need work done with trusted local providers.',
      path: '/products/help-me',
    },
  ];

  protected readonly industries: readonly string[] = [
    'Healthcare',
    'Mining & Resources',
    'Professional Services',
    'Government',
  ];
}
