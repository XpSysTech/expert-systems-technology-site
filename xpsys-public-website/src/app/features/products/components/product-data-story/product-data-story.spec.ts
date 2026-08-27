import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDataStory } from './product-data-story';

describe('ProductDataStory', () => {
  let component: ProductDataStory;
  let fixture: ComponentFixture<ProductDataStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDataStory],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDataStory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
