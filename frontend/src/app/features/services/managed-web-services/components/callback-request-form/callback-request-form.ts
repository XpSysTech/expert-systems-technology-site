import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormStepper } from '../../../../../../shared/components/form-stepper/form-stepper';
import { CallbackEnquiry, ManagedEnquiryResponse } from '../../models/managed-web-services.models';
import { ManagedEnquirySubmission } from '../../services/managed-enquiry-submission';

@Component({
  imports: [FormStepper, ReactiveFormsModule],
  selector: 'app-callback-request-form',
  styleUrl: './callback-request-form.scss',
  templateUrl: './callback-request-form.html',
})
export class CallbackRequestForm {
  private readonly formBuilder = inject(FormBuilder);
  private readonly submission = inject(ManagedEnquirySubmission);

  protected readonly steps = ['Your details', 'Project context', 'Review'] as const;
  protected readonly activeStep = signal(0);
  protected readonly maxVisited = signal(0);
  protected readonly submissionResult = signal<ManagedEnquiryResponse | null>(null);
  protected readonly form = this.formBuilder.nonNullable.group({
    contact: this.formBuilder.nonNullable.group({
      name: ['', [Validators.required, Validators.maxLength(160)]],
      organisation: ['', Validators.maxLength(160)],
      phone: ['', [Validators.required, Validators.maxLength(40)]],
      email: ['', [Validators.email, Validators.maxLength(254)]],
      bestTime: ['', Validators.required],
      consent: [false, Validators.requiredTrue],
    }),
    request: this.formBuilder.nonNullable.group({
      serviceInterest: ['', Validators.required],
      projectScope: ['', Validators.maxLength(3000)],
    }),
  });

  protected goTo(index: number): void { if (index <= this.maxVisited()) this.activeStep.set(index); }
  protected back(): void { this.activeStep.update((step) => Math.max(0, step - 1)); }
  protected next(): void {
    const control = this.activeStep() === 0 ? this.form.controls.contact : this.form.controls.request;
    if (control.invalid) { control.markAllAsTouched(); return; }
    const nextStep = Math.min(2, this.activeStep() + 1);
    this.activeStep.set(nextStep);
    this.maxVisited.update((visited) => Math.max(visited, nextStep));
  }
  protected submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); this.activeStep.set(this.form.controls.contact.invalid ? 0 : 1); return; }
    const payload: CallbackEnquiry = this.form.getRawValue();
    this.submission.submit({ kind: 'callback', payload }).subscribe((result) => this.submissionResult.set(result));
  }
}
