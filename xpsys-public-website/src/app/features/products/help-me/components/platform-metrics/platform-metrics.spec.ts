import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatformMetrics } from './platform-metrics';

describe('PlatformMetrics', () => {
  let component: PlatformMetrics;
  let fixture: ComponentFixture<PlatformMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformMetrics],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatformMetrics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
