import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionNav } from '../../../../../../shared/components/section-nav/section-nav';
import { CAREERS_NAVIGATION } from '../../data/careers.data';

interface CareerRoleType {
  readonly code: string;
  readonly description: string;
  readonly title: string;
}

@Component({
  imports: [RouterLink, SectionNav],
  selector: 'app-careers',
  styleUrl: './careers.scss',
  templateUrl: './careers.html',
})
export class Careers {
  protected readonly navigation = CAREERS_NAVIGATION;
  protected readonly roleTypes: readonly CareerRoleType[] = [
    { code: '01', title: 'Software engineering', description: 'Design, build, test and operate dependable products and customer systems.' },
    { code: '02', title: 'Delivery & operations', description: 'Connect customer context, implementation and long-term technical responsibility.' },
    { code: '03', title: 'Product & research', description: 'Turn evidence from real work into clearer products, decisions and direction.' },
    { code: '04', title: 'Students & early talent', description: 'Learn through scoped responsibility, close feedback and meaningful contribution.' },
  ];
}
