import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ManagedWebsite } from './managed-website';

describe('ManagedWebsite', () => {
  let fixture: ComponentFixture<ManagedWebsite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedWebsite],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(ManagedWebsite);
    fixture.detectChanges();
  });

  it('renders one primary heading and indicative monthly pricing', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(element.textContent).toContain('Indicative N$1,200–N$5,000+ monthly');
  });

  it('puts the website scoping form before the supporting service sections', () => {
    const element: HTMLElement = fixture.nativeElement;
    const scopeSection = element.querySelector('#scope-website');
    const sections = Array.from(element.querySelectorAll('main > section'));
    const scopeIndex = sections.findIndex((section) => section.id === 'scope-website');
    const responsibilityIndex = sections.findIndex((section) => section.getAttribute('aria-labelledby') === 'website-responsibility');

    expect(scopeSection).not.toBeNull();
    expect(scopeSection?.querySelector('app-website-scope-form')).not.toBeNull();
    expect(scopeIndex).toBeGreaterThanOrEqual(0);
    expect(scopeIndex).toBeLessThan(responsibilityIndex);
  });

  it('links to website scoping and platform escalation', () => {
    const links = Array.from(fixture.nativeElement.querySelectorAll('a')) as HTMLAnchorElement[];
    expect(links.some((link) => link.getAttribute('href') === '#scope-website')).toBe(true);
    expect(links.some((link) => link.getAttribute('href') === '/services/managed-web-services/managed-web-platform')).toBe(true);
  });

  it('explains that capability choices are tailored rather than included by default', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('These are capability areas we can assess together');
    expect(element.textContent).toContain('Complex accounts, transactional records and internal workflows');
  });

  it('explains delivery in four website-specific stages with clear outcomes', () => {
    const element: HTMLElement = fixture.nativeElement;
    const stages = element.querySelectorAll('.website-delivery__stage');

    expect(stages).toHaveLength(4);
    expect(element.textContent).toContain('Scope and plan');
    expect(element.textContent).toContain('Manage and improve');
    expect(element.textContent).toContain('An operating service that continues after launch.');
    expect(element.querySelector('.architecture-flow')).toBeNull();
  });
});
