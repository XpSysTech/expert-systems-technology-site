import { Component, computed, input } from '@angular/core';

export type ConceptDiagramKind =
  | 'clinic-lifecycle'
  | 'clinic-layers'
  | 'marketplace-flow'
  | 'marketplace-layers'
  | 'managed-loop'
  | 'managed-delivery';

@Component({
  selector: 'app-concept-diagram',
  styleUrl: './concept-diagram.scss',
  templateUrl: './concept-diagram.html',
})
export class ConceptDiagram {
  readonly kind = input.required<ConceptDiagramKind>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  protected readonly isProductSystemView = computed(() =>
    ['clinic-lifecycle', 'clinic-layers', 'marketplace-flow', 'marketplace-layers'].includes(this.kind()),
  );
}
