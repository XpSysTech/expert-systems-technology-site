import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyticsPreview } from './analytics-preview';

describe('AnalyticsPreview', () => {
  let component: AnalyticsPreview;
  let fixture: ComponentFixture<AnalyticsPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
