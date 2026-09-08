import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SectionNav } from '../../../../../../shared/components/section-nav/section-nav';
import { CAREER_DETAIL_PAGES, CAREERS_NAVIGATION, CareerDetailPageData } from '../../data/careers.data';

const fallbackPage: CareerDetailPageData = CAREER_DETAIL_PAGES['open-positions'] ?? {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / CAREERS',
  title: 'Careers',
  introduction: 'Learn about careers at Expert Systems Technology.',
  primaryCta: { label: 'Contact us', path: '/contact' },
  sections: [],
};

@Component({
  imports: [RouterLink, SectionNav],
  selector: 'app-career-detail',
  styleUrl: './career-detail.scss',
  templateUrl: './career-detail.html',
})
export class CareerDetail {
  private readonly route = inject(ActivatedRoute);
  protected readonly content = this.readContent();
  protected readonly navigation = CAREERS_NAVIGATION;

  private readContent(): CareerDetailPageData {
    const key = this.route.snapshot.data['careerPage'];
    return typeof key === 'string' ? CAREER_DETAIL_PAGES[key] ?? fallbackPage : fallbackPage;
  }
}
