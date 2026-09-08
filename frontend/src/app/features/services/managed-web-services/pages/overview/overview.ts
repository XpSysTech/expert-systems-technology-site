import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaqList } from '../../../../../../shared/components/faq-list/faq-list';
import { CallbackRequestForm } from '../../components/callback-request-form/callback-request-form';
import {
  MANAGED_RESPONSIBILITIES,
  MANAGED_SERVICE_CLASSIFICATIONS,
  MANAGED_SERVICE_FAQS,
} from '../../data/managed-web-services.data';

interface ManagedLifecycleStage {
  readonly description: string;
  readonly label: string;
  readonly responsibilities: readonly string[];
}

interface ManagedDeliveryPhase {
  readonly copy: string;
  readonly number: string;
  readonly outcome: string;
  readonly title: string;
}

const MANAGED_DELIVERY_PHASES: readonly ManagedDeliveryPhase[] = [
  {
    number: '01',
    title: 'Understand the need',
    copy: 'We start with your goals, visitors, content, existing systems and practical constraints.',
    outcome: 'A shared view of the work that matters.',
  },
  {
    number: '02',
    title: 'Define the service',
    copy: 'Together, we confirm the right service level, delivery scope, responsibilities and decision points.',
    outcome: 'A documented proposal and delivery path.',
  },
  {
    number: '03',
    title: 'Build and launch',
    copy: 'We design, build, configure and validate the service for production before the website goes live.',
    outcome: 'A launch-ready service with clear ownership.',
  },
  {
    number: '04',
    title: 'Operate and improve',
    copy: 'After launch, we carry the agreed technical responsibility for monitoring, maintenance and planned improvements.',
    outcome: 'A website that continues to be cared for.',
  },
];

const MANAGED_LIFECYCLE_STAGES: readonly ManagedLifecycleStage[] = [
  {
    label: 'Build',
    description: 'We turn the agreed requirements into a production-ready website designed to be deployed, operated, maintained and changed predictably after launch.',
    responsibilities: ['Requirements and information architecture', 'Engineering and integration', 'Testing and production readiness'],
  },
  {
    label: 'Deploy',
    description: 'We move the website into its live environment and configure the technical services required for a controlled production launch.',
    responsibilities: ['Production deployment', 'Domain, DNS and TLS configuration', 'Release validation and rollback readiness'],
  },
  {
    label: 'Operate',
    description: 'After launch, we manage the agreed technical environment required to keep the website running and accessible to its users.',
    responsibilities: ['Production hosting', 'Runtime and environment operation', 'Operational incident response'],
  },
  {
    label: 'Monitor',
    description: 'We observe important availability and technical signals so issues can be detected before they have to be reported by your customers.',
    responsibilities: ['Website and endpoint availability', 'Errors, logs and operational telemetry', 'Alerts and issue detection'],
  },
  {
    label: 'Maintain',
    description: 'We complete the agreed upkeep required to reduce operational risk and keep the website secure, recoverable and supportable.',
    responsibilities: ['Security and dependency updates', 'Configuration and approved content changes', 'Backup, recovery and technical upkeep'],
  },
  {
    label: 'Improve',
    description: 'Within the agreed scope, performance, usage and changing business needs inform controlled improvements to the service.',
    responsibilities: ['Review performance and usage', 'Identify and prioritise improvements', 'Plan approved changes for the next build cycle'],
  },
];

@Component({
  imports: [CallbackRequestForm, FaqList, RouterLink],
  selector: 'app-managed-web-services-overview',
  styleUrl: './overview.scss',
  templateUrl: './overview.html',
})
export class Overview {
  protected readonly classifications = MANAGED_SERVICE_CLASSIFICATIONS;
  protected readonly deliveryPhases = MANAGED_DELIVERY_PHASES;
  protected readonly faqs = MANAGED_SERVICE_FAQS;
  protected readonly lifecycleStages = MANAGED_LIFECYCLE_STAGES;
  protected readonly responsibilities = MANAGED_RESPONSIBILITIES;
  protected readonly selectedLifecycleIndex = signal(0);
  protected readonly selectedLifecycleStage = computed(
    () => this.lifecycleStages[this.selectedLifecycleIndex()] ?? this.lifecycleStages[0],
  );

  protected selectLifecycleStage(index: number): void {
    if (this.lifecycleStages[index]) {
      this.selectedLifecycleIndex.set(index);
    }
  }
}
