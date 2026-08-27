import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerJourney } from './customer-journey';

describe('CustomerJourney', () => {
  let component: CustomerJourney;
  let fixture: ComponentFixture<CustomerJourney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerJourney],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerJourney);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
