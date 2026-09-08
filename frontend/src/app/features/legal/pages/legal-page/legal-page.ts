import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface PolicySection {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly items?: readonly string[];
}

interface PolicyContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly introduction: string;
  readonly updated: string;
  readonly sections: readonly PolicySection[];
}

const policies: Readonly<Record<string, PolicyContent>> = {
  privacy: {
    eyebrow: 'LEGAL / PRIVACY',
    title: 'Privacy notice',
    introduction: 'This notice explains how Expert Systems Technology CC (XpSys) handles information submitted through this public website.',
    updated: '1 September 2026',
    sections: [
      {
        title: 'Information we collect',
        paragraphs: ['We collect the contact and project information you choose to submit through an enquiry, callback or project-scoping form. Basic technical logs may also be created by our hosting and security services.'],
        items: ['Name, organisation and contact details', 'Project goals, requirements and preferred contact time', 'Consent and communication preferences', 'Basic request, security and diagnostic logs'],
      },
      {
        title: 'How we use information',
        paragraphs: ['We use submitted information to evaluate your request, contact you, prepare next steps, protect the website and improve our service. We do not sell personal information.'],
      },
      {
        title: 'Delivery and service providers',
        paragraphs: ['Enquiries may be delivered to our team through the configured website API or, when that service is unavailable, through a WhatsApp message that you review and send. Hosting, communications and technical service providers process only the information needed to provide their service.'],
      },
      {
        title: 'Retention and protection',
        paragraphs: ['We retain enquiry information only for as long as it is reasonably needed for evaluation, follow-up, record keeping and applicable legal obligations. We apply proportionate access controls and security measures, but no internet transmission is risk-free. Do not submit passwords, identity numbers, medical records or production secrets in a scoping form.'],
      },
      {
        title: 'Your choices',
        paragraphs: ['You may ask us to correct or delete information you submitted, subject to legal and operational record-keeping needs. You may also withdraw consent to future follow-up.'],
      },
      {
        title: 'Contact',
        paragraphs: ['Use the contact page to ask a privacy question or make a request. Include enough information for us to identify the relevant enquiry, but do not send additional sensitive information.'],
      },
    ],
  },
  terms: {
    eyebrow: 'LEGAL / WEBSITE TERMS',
    title: 'Website terms',
    introduction: 'These terms apply to your use of this public website and to enquiries submitted through it.',
    updated: '1 September 2026',
    sections: [
      {
        title: 'Information, not a binding offer',
        paragraphs: ['Website content describes XpSys products, services and direction for general information. Availability, scope, timing and commercial terms are confirmed in a separate written proposal or agreement. Submitting a form does not create a client relationship or require either party to proceed.'],
      },
      {
        title: 'Appropriate use',
        paragraphs: ['You may browse and link to public pages for lawful purposes. Do not interfere with the website, test its security without written permission, submit malicious content, impersonate another person or use automated access in a way that disrupts the service.'],
      },
      {
        title: 'Intellectual property',
        paragraphs: ['The website design, brand assets, original text and software are owned by XpSys or used with permission. You may quote short portions with attribution and link to the source. No other licence is granted unless agreed in writing.'],
      },
      {
        title: 'Accuracy and availability',
        paragraphs: ['We work to keep public information accurate and accessible, but content may change and the website may occasionally be unavailable. External links are provided for convenience; their content and privacy practices are controlled by their respective operators.'],
      },
      {
        title: 'Responsibility',
        paragraphs: ['To the extent permitted by applicable law, XpSys is not responsible for decisions made solely from general website information or for indirect loss arising from use of the public website. Nothing here excludes a responsibility that cannot lawfully be excluded.'],
      },
      {
        title: 'Changes and contact',
        paragraphs: ['We may update these terms as the website and our services evolve. The date above identifies the current version. Contact us if you have a question about these terms.'],
      },
    ],
  },
  accessibility: {
    eyebrow: 'COMPANY / ACCESSIBILITY',
    title: 'Accessibility',
    introduction: 'XpSys is working to make this website usable by people with different access needs, devices and input methods.',
    updated: '1 September 2026',
    sections: [
      {
        title: 'Our approach',
        paragraphs: ['We use WCAG 2.2 Level AA as a practical target for new and changed public content. Accessibility is considered in design, development, testing and ongoing maintenance.'],
      },
      {
        title: 'Features in this website',
        paragraphs: ['The site uses semantic headings and landmarks, visible keyboard focus, descriptive links, labelled form controls, responsive layouts and reduced-motion support. Custom disclosure and stepper components expose their state to assistive technology.'],
      },
      {
        title: 'Known limitations',
        paragraphs: ['We continue to review long-form content, complex comparison tables and multi-step forms across screen readers, zoom levels and mobile devices. Some third-party destinations, including WhatsApp, are outside our control.'],
      },
      {
        title: 'Request help or report a barrier',
        paragraphs: ['If a page or process is difficult to use, contact us with the page address, what you were trying to do and the assistive technology or device involved. We will acknowledge the report and provide the information in another reasonable format where possible.'],
      },
    ],
  },
};

@Component({
  imports: [RouterLink],
  selector: 'app-legal-page',
  styleUrl: './legal-page.scss',
  templateUrl: './legal-page.html',
})
export class LegalPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly policy = policies[this.route.snapshot.data['policy'] as string] ?? policies['privacy'];
}
