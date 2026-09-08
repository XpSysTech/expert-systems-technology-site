import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallbackRequestForm } from './callback-request-form';

describe('CallbackRequestForm', () => {
  let fixture: ComponentFixture<CallbackRequestForm>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CallbackRequestForm], providers: [provideHttpClient()] }).compileComponents();
    fixture = TestBed.createComponent(CallbackRequestForm);
    fixture.detectChanges();
  });
  it('offers an optional project scope in a three-step callback flow', () => {
    expect(fixture.nativeElement.querySelectorAll('app-form-stepper button')).toHaveLength(3);
    expect(fixture.nativeElement.textContent).toContain('How can we reach you?');
  });
});
