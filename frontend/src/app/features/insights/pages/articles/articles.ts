import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionNav, SectionNavItem } from '../../../../../shared/components/section-nav/section-nav';

interface EditorialPost {
  readonly category: string;
  readonly title: string;
  readonly summary: string;
  readonly path: string;
  readonly readingTime: string;
  readonly tone: 'charcoal' | 'red' | 'warm' | 'cool' | 'green' | 'paper';
}

interface EditorialCollection {
  readonly label: string;
  readonly title: string;
  readonly posts: readonly EditorialPost[];
}

@Component({
  imports: [RouterLink, SectionNav],
  selector: 'app-articles',
  styleUrl: './articles.scss',
  templateUrl: './articles.html',
})
export class Articles {
  protected readonly navigation: readonly SectionNavItem[] = [
    { label: 'Insights', path: '/insights', exact: true },
    { label: 'Latest', path: '/insights/articles', exact: true },
    { label: 'Engineering', path: '/insights/articles' },
    { label: 'Operations', path: '/insights/articles' },
    { label: 'Healthcare', path: '/insights/articles' },
    { label: 'Data & AI', path: '/insights/articles' },
    { label: 'Company', path: '/insights/news' },
  ];

  protected readonly featured: EditorialPost = {
    category: 'OPERATING SYSTEMS',
    title: 'Why operational software must begin with the workflow',
    summary: 'A useful system starts with the decisions, handoffs and records that define the operation—not with a list of features.',
    path: '/insights/research',
    readingTime: '8 min read',
    tone: 'charcoal',
  };

  protected readonly newestPosts: readonly EditorialPost[] = [
    {
      category: 'DATA & INTELLIGENCE',
      title: 'From activity to intelligence: building the operational data loop',
      summary: 'How everyday work becomes a dependable record for measurement, learning and action.',
      path: '/insights/research',
      readingTime: '7 min read',
      tone: 'green',
    },
    {
      category: 'HEALTHCARE',
      title: 'Designing clinical systems for continuity',
      summary: 'Clinical software earns trust when every encounter preserves context for the next decision.',
      path: '/insights/reports',
      readingTime: '6 min read',
      tone: 'cool',
    },
    {
      category: 'MANAGED OPERATIONS',
      title: 'What managed operations reveal about service quality',
      summary: 'Service delivery improves when responsibility, evidence and review form one operating rhythm.',
      path: '/insights/reports',
      readingTime: '5 min read',
      tone: 'red',
    },
    {
      category: 'ENGINEERING',
      title: 'The architecture of dependable integrations',
      summary: 'Boundaries, retries and observability matter more than the happy-path demonstration.',
      path: '/insights/research',
      readingTime: '9 min read',
      tone: 'paper',
    },
    {
      category: 'SECURITY',
      title: 'Security is part of the operating model',
      summary: 'Access, recovery and auditability should reflect how the organisation actually works.',
      path: '/company/security',
      readingTime: '6 min read',
      tone: 'charcoal',
    },
    {
      category: 'PRODUCT',
      title: 'Connected workflows create a better operational record',
      summary: 'Why a coherent path through work is more valuable than another isolated dashboard.',
      path: '/products',
      readingTime: '7 min read',
      tone: 'warm',
    },
  ];

  protected readonly collections: readonly EditorialCollection[] = [
    {
      label: 'Featured / Engineering',
      title: 'Building systems that remain useful',
      posts: this.newestPosts.slice(0, 3),
    },
    {
      label: 'Featured / Operations',
      title: 'Responsibility, evidence and improvement',
      posts: this.newestPosts.slice(3, 6),
    },
  ];
}
