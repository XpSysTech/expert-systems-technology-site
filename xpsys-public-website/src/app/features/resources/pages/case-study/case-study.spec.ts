import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudy } from './case-study';

describe('CaseStudy', () => {
  let component: CaseStudy;
  let fixture: ComponentFixture<CaseStudy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudy],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseStudy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
