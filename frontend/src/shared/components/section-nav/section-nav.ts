import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface SectionNavItem {
  readonly label: string;
  readonly path: string;
  readonly exact?: boolean;
}

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-section-nav',
  styleUrl: './section-nav.scss',
  templateUrl: './section-nav.html',
})
export class SectionNav {
  readonly brand = input('Explore');
  readonly brandPath = input('/offerings');
  readonly label = input('Section navigation');
  readonly items = input.required<readonly SectionNavItem[]>();
}
