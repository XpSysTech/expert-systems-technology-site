import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormStepper } from '../../../../../../shared/components/form-stepper/form-stepper';
import { platformMayFitManagedApplication } from '../../data/managed-web-services.data';
import { ManagedEnquiryResponse, ManagedWebPlatformEnquiry } from '../../models/managed-web-services.models';
import { ManagedEnquirySubmission } from '../../services/managed-enquiry-submission';

@Component({
  imports: [FormStepper, ReactiveFormsModule, RouterLink],
  selector: 'app-platform-scope-form',
  styleUrl: './platform-scope-form.scss',
  templateUrl: './platform-scope-form.html',
})
export class PlatformScopeForm {
  private readonly destroyRef = inject(DestroyRef);
  private readonly formBuilder = inject(FormBuilder);
  private readonly submission = inject(ManagedEnquirySubmission);

  protected readonly steps = ['Organisation', 'Platform', 'Users', 'Functions', 'Integrations', 'Data', 'Security', 'Usage', 'Existing systems', 'Contact', 'Review'] as const;
  protected readonly activeStep = signal(0);
  protected readonly maxVisited = signal(0);
  protected readonly applicationFit = signal(false);
  protected readonly submissionResult = signal<ManagedEnquiryResponse | null>(null);
  protected readonly platformTypes = ['Customer portal', 'Member portal', 'Booking platform', 'Dashboard', 'Quote platform', 'Account area', 'Web application', 'Other'] as const;
  protected readonly userRoles = ['Public users', 'Registered customers', 'Staff', 'Administrators', 'Multiple roles'] as const;
  protected readonly functionalRequirements = ['Authentication', 'User accounts', 'Booking', 'Payments', 'Dashboards', 'Document upload', 'Notifications', 'Reporting', 'Integrations', 'Workflow', 'Search', 'Database storage', 'Other'] as const;

  protected readonly form = this.formBuilder.nonNullable.group({
    organisation: this.formBuilder.nonNullable.group({ organisation: ['', [Validators.required, Validators.maxLength(160)]], industry: ['', Validators.required], industryOther: [''], location: ['', Validators.required], contactPerson: ['', Validators.required] }),
    platform: this.formBuilder.nonNullable.group({ platformTypes: this.formBuilder.nonNullable.control<string[]>([], Validators.required), platformTypeOther: [''] }),
    users: this.formBuilder.nonNullable.group({ roles: this.formBuilder.nonNullable.control<string[]>([], Validators.required), estimatedUsers: ['', Validators.required] }),
    functions: this.formBuilder.nonNullable.group({ requirements: this.formBuilder.nonNullable.control<string[]>([], Validators.required), requirementOther: [''] }),
    integrations: this.formBuilder.nonNullable.group({ existingSystems: ['', Validators.maxLength(1000)], thirdPartyApis: ['', Validators.maxLength(1000)], paymentProviders: ['', Validators.maxLength(500)], crmErp: ['', Validators.maxLength(500)], unknown: [false] }),
    data: this.formBuilder.nonNullable.group({ storedInformation: ['', [Validators.required, Validators.maxLength(1500)]], sensitiveDataExpected: ['', Validators.required], migrationNeeds: ['', Validators.maxLength(1000)] }),
    security: this.formBuilder.nonNullable.group({ loginRequired: ['', Validators.required], rolesPermissions: ['', Validators.required], mfaDesired: ['', Validators.required], organisationOnly: ['', Validators.required], mixedAreas: ['', Validators.required] }),
    usage: this.formBuilder.nonNullable.group({ users: ['', Validators.required], interactions: ['', Validators.required], geography: ['', Validators.required], criticality: ['', Validators.required] }),
    existingSystems: this.formBuilder.nonNullable.group({ currentSystem: ['', Validators.maxLength(1000)], migrationRequired: ['', Validators.required], hosting: ['', Validators.maxLength(500)], database: ['', Validators.maxLength(500)], projectScope: ['', Validators.maxLength(3000)] }),
    contact: this.formBuilder.nonNullable.group({ name: ['', [Validators.required, Validators.maxLength(160)]], email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]], phone: ['', [Validators.required, Validators.maxLength(40)]], preference: ['', Validators.required], consent: [false, Validators.requiredTrue] }),
  });

  private readonly stepControls: readonly AbstractControl[] = [this.form.controls.organisation, this.form.controls.platform, this.form.controls.users, this.form.controls.functions, this.form.controls.integrations, this.form.controls.data, this.form.controls.security, this.form.controls.usage, this.form.controls.existingSystems, this.form.controls.contact];

  constructor() {
    this.form.controls.organisation.controls.industry.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => this.setConditionalRequirement(this.form.controls.organisation.controls.industryOther, value === 'Other'));
    this.form.controls.platform.controls.platformTypes.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => { this.setConditionalRequirement(this.form.controls.platform.controls.platformTypeOther, value.includes('Other')); this.updateApplicationFit(); });
    this.form.controls.functions.controls.requirements.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => { this.setConditionalRequirement(this.form.controls.functions.controls.requirementOther, value.includes('Other')); this.updateApplicationFit(); });
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.updateApplicationFit());
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
  protected toggleSelection(control: FormControl<string[]>, value: string, event: Event): void {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    const current = control.value;
    control.setValue(target.checked ? [...current, value] : current.filter((item) => item !== value));
  }
  protected submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); this.activeStep.set(Math.max(0, this.stepControls.findIndex((control) => control.invalid))); return; }
    const payload: ManagedWebPlatformEnquiry = this.form.getRawValue();
    this.submission.submit({ kind: 'managed-web-platform', payload }).subscribe((result) => this.submissionResult.set(result));
  }
  private setConditionalRequirement(control: typeof this.form.controls.organisation.controls.industryOther, required: boolean): void {
    control.setValidators(required ? [Validators.required, Validators.maxLength(1000)] : []);
    if (!required) control.setValue('', { emitEvent: false });
    control.updateValueAndValidity({ emitEvent: false });
  }
  private updateApplicationFit(): void {
    const value = this.form.getRawValue();
    this.applicationFit.set(platformMayFitManagedApplication({ criticality: value.usage.criticality.toLowerCase(), integrations: value.integrations.thirdPartyApis.toLowerCase(), roles: value.users.roles.map((item) => item.toLowerCase()), functions: value.functions.requirements.map((item) => item.toLowerCase()), interactions: value.usage.interactions.toLowerCase() }));
  }
}
