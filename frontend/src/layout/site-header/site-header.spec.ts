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

  it('uses the requested top-level navigation order without Offerings or Resources', () => {
    const links = Array.from(
      fixture.nativeElement.querySelectorAll('.site-header__desktop-nav .site-header__link') as NodeListOf<HTMLAnchorElement>,
    ).map((link) => link.textContent?.trim());

    expect(links).toEqual(['Products', 'Services', 'Industries', 'Insights', 'Company', 'Contact']);
    expect(fixture.nativeElement.textContent).not.toContain('Offerings');
    expect(fixture.nativeElement.textContent).not.toContain('Resources');
  });

  it('links the managed website call to action to Contact', () => {
    const callToAction = fixture.nativeElement.querySelector('.site-header__contact') as HTMLAnchorElement | null;

    expect(callToAction?.textContent).toContain('Get a Managed Website');
    expect(callToAction?.getAttribute('href')).toBe('/contact');
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
      'button[aria-label="Open Industries menu"]',
    ) as HTMLButtonElement | null;

    toggle?.click();
    fixture.detectChanges();
    document.body.click();
    fixture.detectChanges();

    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
  });
});
