import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('presents Managed Web Services as the available Year One offering', () => {
    const section = fixture.nativeElement.querySelector('#managed-web-services') as HTMLElement | null;

    expect(section?.textContent).toContain('Limited availability');
    expect(section?.textContent).toContain('Managed Website');
    expect(section?.textContent).toContain('Managed Web Platform');
    expect(section?.textContent).toContain('Managed Application');
  });

  it('marks only Clinic OS and Help Me as products in development', () => {
    const section = fixture.nativeElement.querySelector('#products-in-development') as HTMLElement | null;
    const productArticles = section?.querySelectorAll('article');

    expect(productArticles?.length).toBe(2);
    expect(section?.textContent).toContain('Clinic OS');
    expect(section?.textContent).toContain('Help Me');
    expect(section?.textContent).not.toContain('Pharmacy OS');
    expect(section?.textContent?.match(/In Development/g)?.length).toBe(2);
  });

  it('provides the requested homepage conversion paths', () => {
    const content = fixture.nativeElement.textContent as string;

    expect(content).toContain('Explore Services');
    expect(content).toContain('Explore Products');
    expect(content).toContain('Scope My Website');
    expect(content).toContain('Scope My Platform');
    expect(content).toContain('Book a Consultation');
    expect(content).toContain('Explore Healthcare');
    expect(content).toContain('Join Product Early Access');
  });
});
