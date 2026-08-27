import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicCapabilityGrid } from './clinic-capability-grid';

describe('ClinicCapabilityGrid', () => {
  let component: ClinicCapabilityGrid;
  let fixture: ComponentFixture<ClinicCapabilityGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicCapabilityGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicCapabilityGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
