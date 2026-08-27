import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceFilter } from './resource-filter';

describe('ResourceFilter', () => {
  let component: ResourceFilter;
  let fixture: ComponentFixture<ResourceFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
