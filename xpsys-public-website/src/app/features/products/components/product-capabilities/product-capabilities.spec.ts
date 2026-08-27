import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCapabilities } from './product-capabilities';

describe('ProductCapabilities', () => {
  let component: ProductCapabilities;
  let fixture: ComponentFixture<ProductCapabilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCapabilities],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCapabilities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
