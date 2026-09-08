import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConceptDiagram } from './concept-diagram';

describe('ConceptDiagram', () => {
  let fixture: ComponentFixture<ConceptDiagram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ConceptDiagram] }).compileComponents();
    fixture = TestBed.createComponent(ConceptDiagram);
    fixture.componentRef.setInput('kind', 'marketplace-flow');
    fixture.componentRef.setInput('title', 'Marketplace journey');
    fixture.componentRef.setInput('description', 'A conceptual journey.');
    fixture.detectChanges();
  });

  it('renders an accessible conceptual diagram without measured data claims', () => {
    expect(fixture.nativeElement.querySelector('figure')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('[role="img"]').getAttribute('aria-label')).toContain('discover');
    expect(fixture.nativeElement.textContent).toContain('Complete');
  });
});
