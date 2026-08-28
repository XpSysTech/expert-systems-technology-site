import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductIntelligence } from './product-intelligence';

describe('ProductIntelligence', () => {
  let component: ProductIntelligence;
  let fixture: ComponentFixture<ProductIntelligence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductIntelligence],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductIntelligence);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
