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
    expect(content).toContain('Pharmacy OS');
    expect(content).toContain('Help Me');
    expect(hrefs).toEqual([
      '/products/clinic-os',
      '/products/pharmacy-os',
      '/products/help-me',
    ]);
  });
});
