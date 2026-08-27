import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductResources } from './product-resources';

describe('ProductResources', () => {
  let component: ProductResources;
  let fixture: ComponentFixture<ProductResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductResources],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductResources);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
