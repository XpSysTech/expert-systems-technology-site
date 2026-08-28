import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductProblem } from './product-problem';

describe('ProductProblem', () => {
  let component: ProductProblem;
  let fixture: ComponentFixture<ProductProblem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductProblem],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductProblem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
