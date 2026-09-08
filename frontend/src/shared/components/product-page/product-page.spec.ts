import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProductPage } from './product-page';

describe('ProductPage', () => {
  let fixture: ComponentFixture<ProductPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProductPage], providers: [provideRouter([])] }).compileComponents();
    fixture = TestBed.createComponent(ProductPage);
  });

  it('presents Clinic OS as an in-development clinic management product with one h1', () => {
    fixture.componentRef.setInput('product', 'clinic-os');
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent as string;
    expect(fixture.nativeElement.querySelectorAll('h1')).toHaveLength(1);
    expect(text).toContain('Run the clinic. Keep the patient journey connected.');
    expect(text).toContain('IN DEVELOPMENT');
    expect(text).toContain('subject to product readiness');
    expect(fixture.nativeElement.querySelector('.product-brand-lockup img')?.getAttribute('src')).toBe('/products/clinic-os-product-card.svg');
    expect(fixture.nativeElement.querySelector('.product-brand-lockup img')?.getAttribute('alt')).toBe('Clinic OS');
    expect(fixture.nativeElement.querySelector('h1.product-brand-lockup img')).toBeTruthy();
  });

  it('uses the Namibia marketplace journey and honest availability language for Help Me', () => {
    fixture.componentRef.setInput('product', 'help-me');
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Help Me Namibia Services Marketplace');
    expect(text).toContain('Rehoboth');
    expect(text).toContain('Discover');
    expect(text).toContain('verified reviews');
    expect(text).not.toContain('Company');
    expect(fixture.nativeElement.querySelector('.product-brand-lockup img')?.getAttribute('src')).toBe('/products/help-me-nam-product-card.svg');
    expect(fixture.nativeElement.querySelector('.product-brand-lockup img')?.getAttribute('alt')).toBe('Help Me');
    expect(fixture.nativeElement.querySelector('h1.product-brand-lockup img')).toBeTruthy();
  });
});
