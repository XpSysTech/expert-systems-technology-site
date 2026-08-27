import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetricGrid } from './metric-grid';

describe('MetricGrid', () => {
  let component: MetricGrid;
  let fixture: ComponentFixture<MetricGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(MetricGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
