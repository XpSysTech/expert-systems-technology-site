import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomSoftware } from './custom-software';

describe('CustomSoftware', () => {
  let component: CustomSoftware;
  let fixture: ComponentFixture<CustomSoftware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSoftware],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSoftware);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
