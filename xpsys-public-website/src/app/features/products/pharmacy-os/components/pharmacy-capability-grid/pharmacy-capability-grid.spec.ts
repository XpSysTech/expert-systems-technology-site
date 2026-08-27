import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PharmacyCapabilityGrid } from './pharmacy-capability-grid';

describe('PharmacyCapabilityGrid', () => {
  let component: PharmacyCapabilityGrid;
  let fixture: ComponentFixture<PharmacyCapabilityGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyCapabilityGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(PharmacyCapabilityGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
