import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicDataModel } from './clinic-data-model';

describe('ClinicDataModel', () => {
  let component: ClinicDataModel;
  let fixture: ComponentFixture<ClinicDataModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicDataModel],
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicDataModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
