import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatedInsights } from './related-insights';

describe('RelatedInsights', () => {
  let component: RelatedInsights;
  let fixture: ComponentFixture<RelatedInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedInsights],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedInsights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
