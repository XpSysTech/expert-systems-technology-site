import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceLevelOverview } from './service-level-overview';

describe('ServiceLevelOverview', () => {
  let component: ServiceLevelOverview;
  let fixture: ComponentFixture<ServiceLevelOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceLevelOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceLevelOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
