import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsiteScopeForm } from './website-scope-form';

describe('WebsiteScopeForm', () => {
  let fixture: ComponentFixture<WebsiteScopeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [WebsiteScopeForm], providers: [provideHttpClient()] }).compileComponents();
    fixture = TestBed.createComponent(WebsiteScopeForm);
    fixture.detectChanges();
  });

  it('starts a six-step responsive website scope', () => {
    expect(fixture.nativeElement.querySelectorAll('app-form-stepper button')).toHaveLength(6);
    expect(fixture.nativeElement.textContent).toContain('Tell us about the organisation.');
  });

  it('does not advance while the current step is incomplete', () => {
    const continueButton = fixture.nativeElement.querySelector('.step-actions .xpsys-button--red') as HTMLButtonElement;
    continueButton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Organisation is required.');
  });
});
