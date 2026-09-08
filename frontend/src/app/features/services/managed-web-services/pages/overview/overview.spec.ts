import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Overview } from './overview';

describe('ManagedWebServicesOverview', () => {
  let fixture: ComponentFixture<Overview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overview],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Overview);
    await fixture.whenStable();
  });

  it('creates the managed web services page', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders one primary heading and all three equal service classifications', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(element.querySelectorAll('.classification-card')).toHaveLength(3);
    expect(element.textContent).toContain('Managed Website');
    expect(element.textContent).toContain('Managed Web Platform');
    expect(element.textContent).toContain('Managed Application');
  });

  it('prioritises service options immediately after the hero', () => {
    const element: HTMLElement = fixture.nativeElement;
    const firstSection = element.querySelector('main > section');

    expect(firstSection?.id).toBe('service-types');
    expect(firstSection?.textContent).toContain('01 / SERVICE OPTIONS');
    expect(element.querySelector('#managed-web-meaning')?.textContent).toContain('02 / WHAT MANAGED MEANS');
  });

  it('renders conditional responsibility labels and scoped navigation', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain('As Required');
    expect(element.textContent).toContain('Not Typical');
    expect(element.querySelector('a[href="/services/managed-web-services/managed-web-platform"]')).toBeTruthy();
  });

  it('explains the managed lifecycle with an interactive responsibility view', () => {
    const element: HTMLElement = fixture.nativeElement;
    const stageButtons = element.querySelectorAll<HTMLButtonElement>('.managed-meaning__stages button');

    expect(stageButtons).toHaveLength(6);
    expect(stageButtons[0]?.getAttribute('aria-pressed')).toBe('true');
    expect(element.querySelector('.managed-meaning__detail')?.textContent).toContain('Requirements and information architecture');

    stageButtons[4]?.click();
    fixture.detectChanges();

    expect(stageButtons[4]?.getAttribute('aria-pressed')).toBe('true');
    expect(element.querySelector('.managed-meaning__detail')?.textContent).toContain('Security and dependency updates');
  });

  it('explains the service journey through four customer-facing delivery phases', () => {
    const element: HTMLElement = fixture.nativeElement;
    const phases = element.querySelectorAll('.delivery-process__phase');

    expect(phases).toHaveLength(4);
    expect(element.textContent).toContain('Understand the need');
    expect(element.textContent).toContain('Define the service');
    expect(element.textContent).toContain('A website that continues to be cared for.');
    expect(element.querySelector('app-concept-diagram')).toBeNull();
  });

  it('keeps Help Me Choose focused on the callback form', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('app-callback-request-form')).toBeTruthy();
    expect(element.querySelector('.choice-links')).toBeNull();
    expect(element.textContent).toContain('Ask our team to call you.');
  });
});
