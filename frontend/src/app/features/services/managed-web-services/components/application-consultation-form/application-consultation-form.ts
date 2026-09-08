import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormStepper } from '../../../../../../shared/components/form-stepper/form-stepper';
import { ManagedApplicationEnquiry, ManagedEnquiryResponse } from '../../models/managed-web-services.models';
import { ManagedEnquirySubmission } from '../../services/managed-enquiry-submission';

@Component({
  imports: [FormStepper, ReactiveFormsModule],
  selector: 'app-application-consultation-form',
  styleUrl: './application-consultation-form.scss',
  templateUrl: './application-consultation-form.html',
})
export class ApplicationConsultationForm {
  private readonly destroyRef = inject(DestroyRef);
  private readonly formBuilder = inject(FormBuilder);
  private readonly submission = inject(ManagedEnquirySubmission);

  protected readonly steps = ['Organisation', 'Problem & scope', 'Operational context', 'Consultation', 'Review'] as const;
  protected readonly activeStep = signal(0);
  protected readonly maxVisited = signal(0);
  protected readonly submissionResult = signal<ManagedEnquiryResponse | null>(null);

  protected readonly form = this.formBuilder.nonNullable.group({
    organisation: this.formBuilder.nonNullable.group({
      organisation: ['', [Validators.required, Validators.maxLength(160)]],
      industry: ['', Validators.required],
      industryOther: [''],
    }),
    requirements: this.formBuilder.nonNullable.group({
      businessProblem: ['', [Validators.required, Validators.maxLength(2500)]],
      currentProcess: ['', [Validators.required, Validators.maxLength(2000)]],
      expectedUserTypes: ['', Validators.required],
      expectedUserTypesOther: [''],
      approximateUsers: ['', Validators.required],
      knownIntegrations: ['', Validators.maxLength(1500)],
      keyFunctionalRequirements: ['', [Validators.required, Validators.maxLength(2500)]],
      otherRequirements: ['', Validators.maxLength(2000)],
      projectScope: ['', Validators.maxLength(3000)],
    }),
    operations: this.formBuilder.nonNullable.group({
      operationalCriticality: ['', Validators.required],
      expectedTimeline: ['', Validators.required],
    }),
    contact: this.formBuilder.nonNullable.group({
      contactName: ['', [Validators.required, Validators.maxLength(160)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      phone: ['', [Validators.required, Validators.maxLength(40)]],
      preferredContactMethod: ['', Validators.required],
      preferredContactOther: [''],
      proposedDate: ['', Validators.required],
      proposedTime: ['', Validators.required],
      consent: [false, Validators.requiredTrue],
    }),
  });

  private readonly stepControls: readonly AbstractControl[] = [
    this.form.controls.organisation,
    this.form.controls.requirements,
    this.form.controls.operations,
    this.form.controls.contact,
  ];

  constructor() {
    this.form.controls.organisation.controls.industry.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) =>
      this.setConditionalRequirement(this.form.controls.organisation.controls.industryOther, value === 'Other'));
    this.form.controls.requirements.controls.expectedUserTypes.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) =>
      this.setConditionalRequirement(this.form.controls.requirements.controls.expectedUserTypesOther, value === 'Other'));
    this.form.controls.contact.controls.preferredContactMethod.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) =>
      this.setConditionalRequirement(this.form.controls.contact.controls.preferredContactOther, value === 'Other'));
  }

  protected goTo(index: number): void { if (index <= this.maxVisited()) this.activeStep.set(index); }
  protected back(): void { this.activeStep.update((step) => Math.max(0, step - 1)); }
  protected next(): void {
    const control = this.stepControls[this.activeStep()];
    if (control?.invalid) { control.markAllAsTouched(); return; }
    const nextStep = Math.min(this.steps.length - 1, this.activeStep() + 1);
    this.activeStep.set(nextStep);
    this.maxVisited.update((visited) => Math.max(visited, nextStep));
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.activeStep.set(Math.max(0, this.stepControls.findIndex((control) => control.invalid)));
      return;
    }
    const payload: ManagedApplicationEnquiry = this.form.getRawValue();
    this.submission.submit({ kind: 'managed-application', payload }).subscribe((result) => this.submissionResult.set(result));
  }

  private setConditionalRequirement(
    control:
      | typeof this.form.controls.organisation.controls.industryOther
      | typeof this.form.controls.requirements.controls.expectedUserTypesOther
      | typeof this.form.controls.contact.controls.preferredContactOther,
    required: boolean,
  ): void {
    control.setValidators(required ? [Validators.required, Validators.maxLength(1000)] : []);
    if (!required) control.setValue('', { emitEvent: false });
    control.updateValueAndValidity({ emitEvent: false });
  }
}
