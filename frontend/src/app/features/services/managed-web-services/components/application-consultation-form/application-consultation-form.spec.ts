import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationConsultationForm } from './application-consultation-form';

describe('ApplicationConsultationForm', () => {
  let fixture: ComponentFixture<ApplicationConsultationForm>;
  let component: ApplicationConsultationForm;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationConsultationForm],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationConsultationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders a shorter five-step consultation flow', () => {
    expect(fixture.nativeElement.querySelectorAll('app-form-stepper button')).toHaveLength(5);
    expect(fixture.nativeElement.textContent).toContain('Consultation');
    expect(fixture.nativeElement.textContent).toContain('Problem & scope');
  });

  it('requires Other context for categorical selections', () => {
    const organisation = component['form'].controls.organisation;

    organisation.controls.industry.setValue('Other');
    expect(organisation.controls.industryOther.hasError('required')).toBe(true);

    organisation.controls.industryOther.setValue('Renewable energy');
    expect(organisation.controls.industryOther.valid).toBe(true);
  });

  it('requires consent, date and time before submission', () => {
    const contact = component['form'].controls.contact;

    expect(contact.controls.consent.hasError('required')).toBe(true);
    expect(contact.controls.proposedDate.hasError('required')).toBe(true);
    expect(contact.controls.proposedTime.hasError('required')).toBe(true);
  });
});
