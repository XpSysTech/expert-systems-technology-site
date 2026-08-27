import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralEnquiryForm } from './general-enquiry-form';

describe('GeneralEnquiryForm', () => {
  let component: GeneralEnquiryForm;
  let fixture: ComponentFixture<GeneralEnquiryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralEnquiryForm],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralEnquiryForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
