import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductIntegrations } from './product-integrations';

describe('ProductIntegrations', () => {
  let component: ProductIntegrations;
  let fixture: ComponentFixture<ProductIntegrations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductIntegrations],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductIntegrations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
