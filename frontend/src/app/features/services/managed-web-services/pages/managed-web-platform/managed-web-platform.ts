import { Component } from '@angular/core';
import { PlatformScopeForm } from '../../components/platform-scope-form/platform-scope-form';
import { FaqList } from '../../../../../../shared/components/faq-list/faq-list';

@Component({
  imports: [FaqList, PlatformScopeForm],
  selector: 'app-managed-web-platform',
  styleUrl: './managed-web-platform.scss',
  templateUrl: './managed-web-platform.html',
})
export class ManagedWebPlatform {
  protected readonly faqs = [
    ['How is this different from a Managed Website?', 'A Platform adds application behaviour such as login, accounts, bookings, dashboards, APIs or database-backed workflows.'],
    ['Can it connect to existing systems?', 'Yes, when the integration is technically viable and included in the scoped engagement.'],
    ['Is there a fixed monthly price?', 'No. Platform pricing depends on users, workflows, data, integrations, infrastructure, support and operational responsibility.'],
    ['What if the requirements become business critical?', 'We will explain why a Managed Application may be a better operating model without automatically changing your selection.'],
  ] as const;
}
