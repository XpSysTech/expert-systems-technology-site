import { Component, input, signal } from '@angular/core';

export type FaqEntry = readonly [question: string, answer: string];

@Component({
  imports: [],
  selector: 'app-faq-list',
  styleUrl: './faq-list.scss',
  templateUrl: './faq-list.html',
})
export class FaqList {
  readonly items = input.required<readonly FaqEntry[]>();
  readonly label = input('Frequently asked questions');

  protected readonly openIndex = signal<number | null>(null);

  protected toggle(index: number): void {
    this.openIndex.update((current) => current === index ? null : index);
  }
}
