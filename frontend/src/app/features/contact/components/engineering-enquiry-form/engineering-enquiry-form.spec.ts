import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EngineeringEnquiryForm } from './engineering-enquiry-form';

describe('EngineeringEnquiryForm', () => {
  let component: EngineeringEnquiryForm;
  let fixture: ComponentFixture<EngineeringEnquiryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringEnquiryForm],
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringEnquiryForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
