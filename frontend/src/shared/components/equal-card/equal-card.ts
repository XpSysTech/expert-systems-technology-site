import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface EqualCardContent {
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly path?: string;
  readonly action?: string;
  readonly expandable?: boolean;
}

@Component({
  imports: [RouterLink],
  selector: 'app-equal-card',
  styleUrl: './equal-card.scss',
  templateUrl: './equal-card.html',
})
export class EqualCard {
  readonly content = input.required<EqualCardContent>();

  protected readonly expanded = signal(false);

  protected toggleExpanded(): void {
    this.expanded.update((value) => !value);
  }
}
