import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductEnquiryForm } from './product-enquiry-form';

describe('ProductEnquiryForm', () => {
  let component: ProductEnquiryForm;
  let fixture: ComponentFixture<ProductEnquiryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEnquiryForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductEnquiryForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
