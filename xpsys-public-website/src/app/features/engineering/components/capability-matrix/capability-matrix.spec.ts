import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapabilityMatrix } from './capability-matrix';

describe('CapabilityMatrix', () => {
  let component: CapabilityMatrix;
  let fixture: ComponentFixture<CapabilityMatrix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapabilityMatrix],
    }).compileComponents();

    fixture = TestBed.createComponent(CapabilityMatrix);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
