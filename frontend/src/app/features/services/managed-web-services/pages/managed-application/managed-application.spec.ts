import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagedApplication } from './managed-application';

describe('ManagedApplication', () => {
  let fixture: ComponentFixture<ManagedApplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedApplication],
      providers: [provideHttpClient()],
    }).compileComponents();
    fixture = TestBed.createComponent(ManagedApplication);
    fixture.detectChanges();
  });

  it('renders one primary heading and consultation-required pricing', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(element.textContent).toContain('Custom Monthly Engagement — Consultation Required');
  });

  it('states that ownership and intellectual property are contractual', () => {
    expect(fixture.nativeElement.textContent).toContain('Ownership and intellectual property are contractual');
  });

  it('includes the shorter consultation form', () => {
    expect(fixture.nativeElement.querySelector('app-application-consultation-form')).toBeTruthy();
  });
});
