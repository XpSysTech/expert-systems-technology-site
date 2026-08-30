import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionNav, SectionNavItem } from '../../../../../shared/components/section-nav/section-nav';

interface InsightsSection {
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly action: string;
  readonly path: string;
  readonly tone: 'charcoal' | 'red' | 'warm' | 'cool' | 'mist' | 'signal';
}

@Component({
  imports: [RouterLink, SectionNav],
  selector: 'app-insights',
  styleUrl: './insights.scss',
  templateUrl: './insights.html',
})
export class Insights {
  protected readonly navigation: readonly SectionNavItem[] = [
    { label: 'Insights', path: '/insights', exact: true },
    { label: 'Media Coverage', path: '/insights/news' },
    { label: 'Press Releases', path: '/insights/news' },
    { label: 'Blog', path: '/insights/articles' },
    { label: 'Research', path: '/insights/research' },
    { label: 'Reports', path: '/insights/reports' },
  ];

  protected readonly sections: readonly InsightsSection[] = [
    {
      code: '01 / COVERAGE',
      title: 'Media Coverage',
      description: 'Selected coverage and external perspectives on our work, products and operating model.',
      action: 'Read the latest',
      path: '/insights/news',
      tone: 'charcoal',
    },
    {
      code: '02 / RELEASES',
      title: 'Press Releases',
      description: 'Official announcements about products, partnerships, milestones and company activity.',
      action: 'Browse releases',
      path: '/insights/news',
      tone: 'cool',
    },
    {
      code: '03 / EDITORIAL',
      title: 'Blog',
      description: 'Practical thinking on software, operational systems, data and intelligent workflows.',
      action: 'Read the blog',
      path: '/insights/articles',
      tone: 'red',
    },
    {
      code: '04 / RESEARCH',
      title: 'Research',
      description: 'Structured investigations into the questions that shape dependable operating systems.',
      action: 'Explore research',
      path: '/insights/research',
      tone: 'warm',
    },
    {
      code: '05 / EVIDENCE',
      title: 'Reports',
      description: 'Evidence-led findings and field observations prepared to support better decisions.',
      action: 'View reports',
      path: '/insights/reports',
      tone: 'mist',
    },
    {
      code: '06 / COMPANY',
      title: 'Company News',
      description: 'Updates from Expert Systems Technology and the teams building our products and services.',
      action: 'See company news',
      path: '/insights/news',
      tone: 'signal',
    },
  ];
}
