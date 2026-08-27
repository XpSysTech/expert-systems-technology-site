import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndustryInsights } from './industry-insights';

describe('IndustryInsights', () => {
  let component: IndustryInsights;
  let fixture: ComponentFixture<IndustryInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryInsights],
    }).compileComponents();

    fixture = TestBed.createComponent(IndustryInsights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
