import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagedOperatingModel } from './managed-operating-model';

describe('ManagedOperatingModel', () => {
  let component: ManagedOperatingModel;
  let fixture: ComponentFixture<ManagedOperatingModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedOperatingModel],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagedOperatingModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
