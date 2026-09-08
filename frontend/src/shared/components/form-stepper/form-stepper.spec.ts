import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormStepper } from './form-stepper';

describe('FormStepper', () => {
  let fixture: ComponentFixture<FormStepper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [FormStepper] }).compileComponents();
    fixture = TestBed.createComponent(FormStepper);
    fixture.componentRef.setInput('steps', ['Organisation', 'Scope', 'Review']);
    fixture.componentRef.setInput('activeStep', 1);
    fixture.componentRef.setInput('maxVisited', 1);
    fixture.detectChanges();
  });

  it('renders horizontal numbered progress and disables unvisited steps', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons).toHaveLength(3);
    expect(buttons[1].getAttribute('aria-current')).toBe('step');
    expect(buttons[2].disabled).toBe(true);
    expect(fixture.nativeElement.textContent).toContain('02');
  });
});
