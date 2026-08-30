import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  let component: SiteHeader;
  let fixture: ComponentFixture<SiteHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteHeader],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exposes Offerings as the primary product and services entry point', () => {
    expect(fixture.nativeElement.textContent).toContain('Offerings');
  });

  it('opens the Offerings dropdown from its icon and exposes product and service links', () => {
    const toggle = fixture.nativeElement.querySelector(
      'button[aria-label="Open Offerings menu"]',
    ) as HTMLButtonElement | null;

    toggle?.click();
    fixture.detectChanges();

    const content = fixture.nativeElement.textContent as string;
    expect(toggle?.getAttribute('aria-expanded')).toBe('true');
    expect(content).toContain('Clinic OS');
    expect(content).toContain('Managed Web Services');
  });

  it('closes a dropdown when the pointer leaves its navigation entry', () => {
    const toggle = fixture.nativeElement.querySelector(
      'button[aria-label="Open Industries menu"]',
    ) as HTMLButtonElement | null;
    const entry = toggle?.closest('.nav-entry');

    toggle?.click();
    fixture.detectChanges();
    entry?.dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();

    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    expect(fixture.nativeElement.textContent).not.toContain('Mining & Resources');
  });

  it('uses the grid variant only for the Industries dropdown', () => {
    const industriesToggle = fixture.nativeElement.querySelector(
      'button[aria-label="Open Industries menu"]',
    ) as HTMLButtonElement | null;

    industriesToggle?.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.nav-dropdown--industries')).not.toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Professional Services');
  });

  it('closes a dropdown when the user clicks outside the header', () => {
    const toggle = fixture.nativeElement.querySelector(
      'button[aria-label="Open Offerings menu"]',
    ) as HTMLButtonElement | null;

    toggle?.click();
    fixture.detectChanges();
    document.body.click();
    fixture.detectChanges();

    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
  });
});
