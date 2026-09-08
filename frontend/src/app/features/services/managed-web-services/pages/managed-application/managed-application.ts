import { Component } from '@angular/core';
import { ApplicationConsultationForm } from '../../components/application-consultation-form/application-consultation-form';
import { FaqList } from '../../../../../../shared/components/faq-list/faq-list';

@Component({
  imports: [ApplicationConsultationForm, FaqList],
  selector: 'app-managed-application',
  styleUrl: './managed-application.scss',
  templateUrl: './managed-application.html',
})
export class ManagedApplication {
  protected readonly faqs = [
    ['What qualifies as business critical?', 'A system may be business critical when downtime, data loss or failed workflows materially disrupt customers, staff, revenue or core operations.'],
    ['Does Expert Systems Technology own the application?', 'Ownership, licensing and operation are contractual. A Managed Application does not imply one universal ownership model.'],
    ['Can we request full ownership?', 'A fully bespoke owned solution requires a separate discussion about delivery, intellectual property and ongoing operation.'],
    ['What is included in incident operations?', 'The response boundary, service levels, communication and recovery responsibilities are defined in the scoped contract.'],
  ] as const;
}
