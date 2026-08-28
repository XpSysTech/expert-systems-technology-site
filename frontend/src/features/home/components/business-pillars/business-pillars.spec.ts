import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessPillars } from './business-pillars';

describe('BusinessPillars', () => {
  let component: BusinessPillars;
  let fixture: ComponentFixture<BusinessPillars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPillars],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessPillars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
