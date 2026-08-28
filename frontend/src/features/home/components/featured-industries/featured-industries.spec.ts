import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedIndustries } from './featured-industries';

describe('FeaturedIndustries', () => {
  let component: FeaturedIndustries;
  let fixture: ComponentFixture<FeaturedIndustries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedIndustries],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedIndustries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
