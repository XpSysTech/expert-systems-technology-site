import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedInsights } from './featured-insights';

describe('FeaturedInsights', () => {
  let component: FeaturedInsights;
  let fixture: ComponentFixture<FeaturedInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedInsights],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedInsights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
