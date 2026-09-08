import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaqList } from '../../../../../../shared/components/faq-list/faq-list';
import { WebsiteScopeForm } from '../../components/website-scope-form/website-scope-form';

@Component({
  imports: [FaqList, RouterLink, WebsiteScopeForm],
  selector: 'app-managed-website',
  styleUrl: './managed-website.scss',
  templateUrl: './managed-website.html',
})
export class ManagedWebsite {
  protected readonly deliveryStages = [
    {
      number: '01',
      title: 'Scope and plan',
      copy: 'Clarify your objectives, audience, pages, content, existing access and the decisions needed to move forward.',
      outcome: 'A documented website scope and a practical next step.',
    },
    {
      number: '02',
      title: 'Design and build',
      copy: 'Shape the information architecture, visual direction and responsive public pages around what your visitors need to do.',
      outcome: 'A website prepared for production review.',
    },
    {
      number: '03',
      title: 'Launch and confirm',
      copy: 'Configure production hosting, domain and security settings, then validate the website before it goes live.',
      outcome: 'A verified launch with responsibilities recorded.',
    },
    {
      number: '04',
      title: 'Manage and improve',
      copy: 'Monitor availability, complete agreed maintenance and plan useful changes as your organisation evolves.',
      outcome: 'An operating service that continues after launch.',
    },
  ] as const;

  protected readonly capabilityGroups = [
    {
      number: '01',
      title: 'Pages & publishing',
      copy: 'Clear public pages for your company, services, products, locations, insights, documents and policies.',
      examples: 'For example: service details, case studies, vacancies, FAQs and downloadable resources.',
    },
    {
      number: '02',
      title: 'Visitor actions',
      copy: 'Useful ways for visitors to contact your team, request a quote, ask for a callback or begin a consultation.',
      examples: 'Forms, click-to-call, WhatsApp links and external booking hand-offs can be assessed where useful.',
    },
    {
      number: '03',
      title: 'Connected tools',
      copy: 'Appropriate connections to the services your organisation already uses, without adding unnecessary complexity.',
      examples: 'This can include analytics, maps, email, CRM lead hand-off or a trusted booking provider.',
    },
    {
      number: '04',
      title: 'Lightweight workflows',
      copy: 'Simple public request journeys that acknowledge the visitor and route information to the right team.',
      examples: 'Complex accounts, transactional records and internal workflows are assessed as platform or application work.',
    },
  ] as const;

  protected readonly responsibilities = [
    { title: 'Design & development', copy: 'Information architecture, responsive implementation and launch-ready content presentation.', more: 'We shape the page structure around customer questions and the actions visitors should take.' },
    { title: 'Hosting & domain configuration', copy: 'Production hosting, SSL and agreed DNS responsibilities within the service boundary.', more: 'We document access and renewal responsibilities so the website is not dependent on an unknown account.' },
    { title: 'Monitoring & maintenance', copy: 'Availability monitoring, controlled updates, maintenance and release management.', more: 'Routine checks and controlled changes reduce avoidable downtime and outdated dependencies.' },
    { title: 'Security posture', copy: 'Reasonable hardening, dependency maintenance and response within the contracted scope.', more: 'The agreed scope defines updates, access controls and how potential security concerns are handled.' },
    { title: 'Content support', copy: 'Defined content-change capacity and turnaround, with larger changes assessed separately.', more: 'Regular content work can be included, while campaigns or new sections are scoped before work starts.' },
    { title: 'Continuous improvement', copy: 'Practical improvements informed by operational observations and agreed priorities.', more: 'We use support requests, performance and visitor behaviour to identify useful improvements.' },
  ] as const;

  protected readonly faqs = [
    ['Is this only for a new website?', 'No. We can assess an existing site for migration into a managed operating scope.'],
    ['Can the monthly scope change?', 'Yes. Functional, content and operating responsibility changes are reviewed and scoped before they are added.'],
    ['Is the N$1,200–N$5,000+ range a quote?', 'No. It is indicative planning guidance; the final monthly engagement follows an assessment and written scope.'],
    ['Who manages the domain?', 'Domain access, registration and operational responsibilities are agreed during scope and recorded in the contract.'],
  ] as const;
}
