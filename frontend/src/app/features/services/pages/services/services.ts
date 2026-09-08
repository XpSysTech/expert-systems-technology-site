import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  SalesCard,
  SalesCardContent,
} from '../../../../../shared/components/sales-card/sales-card';

@Component({
  imports: [RouterLink, SalesCard],
  selector: 'app-services',
  styleUrl: './services.scss',
  templateUrl: './services.html',
})
export class Services {
  protected readonly services: readonly SalesCardContent[] = [
    {
      code: '01 / WEB OPERATIONS',
      title: 'Managed Web Services',
      audience: 'Digital teams',
      outcome: 'Keep your public digital presence dependable after launch.',
      description: 'Bring strategy, engineering, hosting, monitoring and improvement under one accountable service relationship.',
      capabilities: ['Website engineering', 'Monitoring and maintenance', 'Performance and analytics'],
      path: '/services/managed-web-services',
      action: 'View Managed Web Services',
    },
  ];
}
