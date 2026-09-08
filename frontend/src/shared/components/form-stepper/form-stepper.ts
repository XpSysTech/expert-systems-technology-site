import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-form-stepper',
  styleUrl: './form-stepper.scss',
  templateUrl: './form-stepper.html',
})
export class FormStepper {
  readonly steps = input.required<readonly string[]>();
  readonly activeStep = input.required<number>();
  readonly maxVisited = input.required<number>();
  readonly label = input('Form progress');
  readonly stepChange = output<number>();

  protected selectStep(index: number): void {
    if (index <= this.maxVisited()) {
      this.stepChange.emit(index);
    }
  }
}
