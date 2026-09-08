import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormStepper } from '../../../../../../shared/components/form-stepper/form-stepper';
import { ManagedEnquiryResponse, ManagedWebsiteEnquiry } from '../../models/managed-web-services.models';
import { ManagedEnquirySubmission } from '../../services/managed-enquiry-submission';

@Component({
  imports: [FormStepper, ReactiveFormsModule],
  selector: 'app-website-scope-form',
  styleUrl: './website-scope-form.scss',
  templateUrl: './website-scope-form.html',
})
export class WebsiteScopeForm {
  private readonly formBuilder = inject(FormBuilder);
  private readonly submission = inject(ManagedEnquirySubmission);

  protected readonly steps = ['Organisation', 'Website goals', 'Content', 'Managed operation', 'Contact', 'Review'] as const;
  protected readonly activeStep = signal(0);
  protected readonly maxVisited = signal(0);
  protected readonly submissionResult = signal<ManagedEnquiryResponse | null>(null);

  protected readonly form = this.formBuilder.nonNullable.group({
    organisation: this.formBuilder.nonNullable.group({
      organisation: ['', [Validators.required, Validators.maxLength(160)]],
      industry: ['', Validators.required],
      currentWebsite: ['', Validators.maxLength(500)],
    }),
    project: this.formBuilder.nonNullable.group({
      websiteType: ['', Validators.required],
      goals: this.formBuilder.nonNullable.control<string[]>([], Validators.required),
      otherGoal: ['', Validators.maxLength(1000)],
    }),
    content: this.formBuilder.nonNullable.group({
      approximatePages: ['', Validators.required],
      contentStatus: ['', Validators.required],
      functionality: ['', Validators.maxLength(1500)],
    }),
    operation: this.formBuilder.nonNullable.group({
      launchWindow: ['', Validators.required],
      updateFrequency: ['', Validators.required],
      projectScope: ['', Validators.maxLength(3000)],
    }),
    contact: this.formBuilder.nonNullable.group({
      name: ['', [Validators.required, Validators.maxLength(160)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      phone: ['', [Validators.required, Validators.maxLength(40)]],
      preference: ['', Validators.required],
      consent: [false, Validators.requiredTrue],
    }),
  });

  private readonly stepControls: readonly AbstractControl[] = [
    this.form.controls.organisation,
    this.form.controls.project,
    this.form.controls.content,
    this.form.controls.operation,
    this.form.controls.contact,
  ];

  protected goTo(index: number): void {
    if (index <= this.maxVisited()) this.activeStep.set(index);
  }

  protected next(): void {
    const control = this.stepControls[this.activeStep()];
    if (control?.invalid) {
      control.markAllAsTouched();
      return;
    }
    const nextStep = Math.min(this.activeStep() + 1, this.steps.length - 1);
    this.activeStep.set(nextStep);
    this.maxVisited.update((visited) => Math.max(visited, nextStep));
  }

  protected back(): void {
    this.activeStep.update((step) => Math.max(0, step - 1));
  }

  protected toggleGoal(goal: string, event: Event): void {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    const current = this.form.controls.project.controls.goals.value;
    this.form.controls.project.controls.goals.setValue(
      target.checked ? [...current, goal] : current.filter((item) => item !== goal),
    );
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const invalidIndex = this.stepControls.findIndex((control) => control.invalid);
      this.activeStep.set(Math.max(0, invalidIndex));
      return;
    }
    const payload: ManagedWebsiteEnquiry = this.form.getRawValue();
    this.submission.submit({ kind: 'managed-website', payload }).subscribe((result) => this.submissionResult.set(result));
  }
}
