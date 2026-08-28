import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductWorkflow } from './product-workflow';

describe('ProductWorkflow', () => {
  let component: ProductWorkflow;
  let fixture: ComponentFixture<ProductWorkflow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductWorkflow],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductWorkflow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
