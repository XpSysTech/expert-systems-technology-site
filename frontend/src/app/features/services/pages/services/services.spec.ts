import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Services } from './services';

describe('Services', () => {
  let fixture: ComponentFixture<Services>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Services],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Services);
    await fixture.whenStable();
  });

  it('renders all service categories', () => {
    const content = fixture.nativeElement.textContent as string;
    expect(content).toContain('Managed Web Services');
    expect(content).toContain('Managed Business Services');
    expect(content).toContain('Software Engineering Services');
  });

  it('links every service proposition to its detailed page', () => {
    const hrefs = Array.from(
      fixture.nativeElement.querySelectorAll('app-sales-card a') as NodeListOf<HTMLAnchorElement>,
      (link) => link.getAttribute('href'),
    );

    expect(hrefs).toEqual([
      '/services/managed-web-services',
      '/services/managed-business-services',
      '/services/software-engineering',
    ]);
  });
});
