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
    expect(section?.querySelector('img[src="/products/help-me-nam-product-card.svg"]')).toBeTruthy();
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

  it('presents customer-facing insight topics with descriptive actions', () => {
    const section = fixture.nativeElement.querySelector('#insights') as HTMLElement | null;
    const content = section?.textContent ?? '';

    expect(content).toContain('What we learn, we share.');
    expect(content).toContain('Your website is part of how your business operates.');
    expect(content).toContain('Designing a healthcare website around trust and action.');
    expect(content).toContain('Why clear service boundaries lead to better websites.');
    expect(content).toContain('Read the article');
    expect(content).toContain('Read the guide');
    expect(content).toContain('Read the note');
    expect(content).not.toContain('Read more');
    expect(content).not.toContain('Insights should');
  });

  it('presents replaceable partner-story placeholders in a working carousel', () => {
    const section = fixture.nativeElement.querySelector('#partner-voices') as HTMLElement | null;
    const firstCard = section?.querySelector('[data-partner-card]') as HTMLElement | null;
    const nextButton = section?.querySelector('[aria-label="Next partner story"]') as HTMLButtonElement | null;

    expect(section?.textContent).toContain('What our partners say about working with us.');
    expect(section?.textContent).toContain('Partner story placeholder');
    expect(section?.textContent).toContain('01 / 05');
    expect(firstCard?.textContent).toContain('Partner story 01');

    nextButton?.click();
    fixture.detectChanges();

    expect(section?.textContent).toContain('02 / 05');
    expect(section?.querySelector('[data-partner-card]')?.textContent).toContain('Partner story 02');
    expect(section?.textContent).not.toContain('COMPANY DIRECTION');
  });
});
