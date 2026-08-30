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
      audience: 'Clinics and care teams',
      outcome: 'Run clinical work from one dependable operational record.',
      description: 'Connect patient administration, consultations and daily clinic activity without fragmenting the care workflow.',
      capabilities: ['Patient and visit records', 'Clinical workflow visibility', 'Operational reporting'],
      path: '/products/clinic-os',
      action: 'Explore Clinic OS',
    },
    {
      code: '02 / PHARMACY',
      title: 'Pharmacy OS',
      audience: 'Pharmacies and dispensaries',
      outcome: 'Make dispensing, inventory and performance visible together.',
      description: 'Give pharmacy teams a clearer operating picture from stock movement through dispensing and management reporting.',
      capabilities: ['Dispensing workflows', 'Inventory visibility', 'Pharmacy performance'],
      path: '/products/pharmacy-os',
      action: 'Explore Pharmacy OS',
    },
    {
      code: '03 / MARKETPLACE',
      title: 'Help Me',
      audience: 'Customers and providers',
      outcome: 'Turn a local service need into accountable completed work.',
      description: 'Connect customers with trusted providers through a structured marketplace built around requests, delivery and confidence.',
      capabilities: ['Service discovery', 'Structured job requests', 'Provider marketplace'],
      path: '/products/help-me',
      action: 'Explore Help Me',
    },
  ];
}
