import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PlatformScopeForm } from './platform-scope-form';

describe('PlatformScopeForm', () => {
  let fixture: ComponentFixture<PlatformScopeForm>;
  let component: PlatformScopeForm;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformScopeForm],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatformScopeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders an eleven-step guided platform scope', () => {
    expect(fixture.nativeElement.querySelectorAll('app-form-stepper button')).toHaveLength(11);
    expect(fixture.nativeElement.textContent).toContain('Organisation');
    expect(fixture.nativeElement.textContent).toContain('Review');
  });

  it('requires contextual notes when Other is selected', () => {
    const platform = component['form'].controls.platform;

    platform.controls.platformTypes.setValue(['Other']);
    expect(platform.controls.platformTypeOther.hasError('required')).toBe(true);

    platform.controls.platformTypeOther.setValue('Volunteer coordination portal');
    expect(platform.controls.platformTypeOther.valid).toBe(true);
  });

  it('recommends an application discussion without blocking the platform scope', () => {
    component['form'].controls.usage.controls.criticality.setValue('business critical');

    expect(component['applicationFit']()).toBe(true);
    expect(component['form'].enabled).toBe(true);
  });
});
