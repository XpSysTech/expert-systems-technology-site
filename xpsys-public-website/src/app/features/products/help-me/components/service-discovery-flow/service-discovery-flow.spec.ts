import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceDiscoveryFlow } from './service-discovery-flow';

describe('ServiceDiscoveryFlow', () => {
  let component: ServiceDiscoveryFlow;
  let fixture: ComponentFixture<ServiceDiscoveryFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDiscoveryFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceDiscoveryFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
