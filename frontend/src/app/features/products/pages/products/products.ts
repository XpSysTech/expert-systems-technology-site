import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  SalesCard,
  SalesCardContent,
} from '../../../../../shared/components/sales-card/sales-card';

@Component({
  imports: [RouterLink, SalesCard],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
})
export class Products {
  protected readonly products: readonly SalesCardContent[] = [
    {
      code: '01 / HEALTHCARE',
      title: 'Clinic OS',
      image: '/products/clinic-os-product-card.svg',
      imageAlt: 'Clinic OS logo and icon',
      audience: 'IN DEVELOPMENT · Medical clinics and practices',
      outcome: 'Run the clinic. Keep the patient journey connected.',
      description: 'A clinic management system being designed around clinical and administrative workflows and one longitudinal patient record.',
      capabilities: ['Patient management', 'Scheduling & encounters', 'Practice operations'],
      path: '/products/clinic-os',
      action: 'Explore Clinic OS',
    },
    {
      code: '02 / NAMIBIA SERVICES MARKETPLACE',
      title: 'Help Me',
      image: '/products/help-me-horizontal-logo.svg',
      imageAlt: 'Help Me logo and icon',
      audience: 'IN DEVELOPMENT · Customers and local providers',
      outcome: 'Find local help. Turn a need into completed work.',
      description: 'A Namibia-focused marketplace connecting discovery, provider profiles, requests, quotations, jobs, completion and verified reviews.',
      capabilities: ['Service discovery', 'Requests & quotations', 'Jobs, completion & reviews'],
      path: '/products/help-me',
      action: 'Explore Help Me',
    },
  ];
}
