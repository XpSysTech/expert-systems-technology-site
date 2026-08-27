import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPortfolio } from './product-portfolio';

describe('ProductPortfolio', () => {
  let component: ProductPortfolio;
  let fixture: ComponentFixture<ProductPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPortfolio],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPortfolio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
