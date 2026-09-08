import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Careers } from './careers';

describe('Careers', () => {
  let fixture: ComponentFixture<Careers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Careers],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(Careers);
    fixture.detectChanges();
  });

  it('renders one primary heading and every requested careers section', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(element.textContent).toContain('WHO WE ARE');
    expect(element.textContent).toContain('TYPES OF ROLES');
    expect(element.textContent).toContain('CURRENTLY RECRUITING');
    expect(element.textContent).toContain('OUR MISSION');
    expect(element.textContent).toContain('OUR PEOPLE');
  });

  it('routes role calls to action to the open positions page', () => {
    const roleLinks = fixture.nativeElement.querySelectorAll('.career-role-grid a[href="/company/careers/open-positions"]');
    expect(roleLinks).toHaveLength(4);
  });

  it('uses the shared product-style section navigation', () => {
    expect(fixture.nativeElement.querySelector('app-section-nav')).toBeTruthy();
    expect(fixture.nativeElement.querySelectorAll('app-section-nav li')).toHaveLength(5);
  });
});
