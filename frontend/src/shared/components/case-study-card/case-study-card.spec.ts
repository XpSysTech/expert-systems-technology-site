import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudyCard } from './case-study-card';

describe('CaseStudyCard', () => {
  let component: CaseStudyCard;
  let fixture: ComponentFixture<CaseStudyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudyCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseStudyCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
