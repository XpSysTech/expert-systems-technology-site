import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyPrinciples } from './company-principles';

describe('CompanyPrinciples', () => {
  let component: CompanyPrinciples;
  let fixture: ComponentFixture<CompanyPrinciples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyPrinciples],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyPrinciples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
