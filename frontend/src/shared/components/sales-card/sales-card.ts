import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface SalesCardContent {
  readonly code: string;
  readonly title: string;
  readonly audience: string;
  readonly outcome: string;
  readonly description: string;
  readonly capabilities: readonly string[];
  readonly path: string;
  readonly action: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-sales-card',
  styleUrl: './sales-card.scss',
  templateUrl: './sales-card.html',
})
export class SalesCard {
  readonly content = input.required<SalesCardContent>();
}
