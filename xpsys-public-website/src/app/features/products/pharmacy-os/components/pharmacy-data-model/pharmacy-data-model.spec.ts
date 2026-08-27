import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PharmacyDataModel } from './pharmacy-data-model';

describe('PharmacyDataModel', () => {
  let component: PharmacyDataModel;
  let fixture: ComponentFixture<PharmacyDataModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyDataModel],
    }).compileComponents();

    fixture = TestBed.createComponent(PharmacyDataModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
