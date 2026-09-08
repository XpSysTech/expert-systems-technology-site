import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Products } from './products';

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders complete links for every product', () => {
    const content = fixture.nativeElement.textContent as string;
    const hrefs = Array.from(
      fixture.nativeElement.querySelectorAll('app-sales-card a') as NodeListOf<HTMLAnchorElement>,
      (link) => link.getAttribute('href'),
    );

    expect(content).toContain('Clinic OS');
    expect(content).toContain('Help Me');
    expect(hrefs).toEqual([
      '/products/clinic-os',
      '/products/help-me',
    ]);
    expect(content).toContain('IN DEVELOPMENT');
    expect(
      Array.from(
        fixture.nativeElement.querySelectorAll('.sales-card__media img') as NodeListOf<HTMLImageElement>,
        (image) => image.getAttribute('src'),
      ),
    ).toEqual([
      '/products/clinic-os-product-card.svg',
      '/products/help-me-horizontal-logo.svg',
    ]);
  });

  it('frames the product portfolio for growth beyond one geography', () => {
    const hero = fixture.nativeElement.querySelector('.catalog-hero') as HTMLElement | null;
    const content = hero?.textContent ?? '';

    expect(content).toContain('Building digital infrastructure around how work gets done.');
    expect(content).toContain('grow with the organisations and industries they serve');
    expect(content).not.toContain('Namibia');
  });
});
