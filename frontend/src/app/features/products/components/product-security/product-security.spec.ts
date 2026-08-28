import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductSecurity } from './product-security';

describe('ProductSecurity', () => {
  let component: ProductSecurity;
  let fixture: ComponentFixture<ProductSecurity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSecurity],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSecurity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
