import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerCareOperations } from './customer-care-operations';

describe('CustomerCareOperations', () => {
  let component: CustomerCareOperations;
  let fixture: ComponentFixture<CustomerCareOperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCareOperations],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerCareOperations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
