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
    {
      code: '02 / BUSINESS OPERATIONS',
      title: 'Managed Business Services',
      audience: 'Operational teams',
      outcome: 'Create repeatable customer and support operations with clear reporting.',
      description: 'Structure the people, workflows and measures behind customer care, sales support and software-enabled service delivery.',
      capabilities: ['Customer care operations', 'Sales and software support', 'Accountable reporting'],
      path: '/services/managed-business-services',
      action: 'View Business Services',
    },
    {
      code: '03 / ENGINEERING',
      title: 'Software Engineering Services',
      audience: 'Product and operations leaders',
      outcome: 'Build the system around the operation when standard software does not fit.',
      description: 'Move from requirements and architecture to secure custom software with maintainable delivery ownership.',
      capabilities: ['Requirements engineering', 'Architecture and integration', 'Custom software delivery'],
      path: '/services/software-engineering',
      action: 'View Engineering Services',
    },
  ];
}
