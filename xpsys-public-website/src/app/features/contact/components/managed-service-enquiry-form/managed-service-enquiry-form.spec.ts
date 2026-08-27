import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagedServiceEnquiryForm } from './managed-service-enquiry-form';

describe('ManagedServiceEnquiryForm', () => {
  let component: ManagedServiceEnquiryForm;
  let fixture: ComponentFixture<ManagedServiceEnquiryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedServiceEnquiryForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagedServiceEnquiryForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
