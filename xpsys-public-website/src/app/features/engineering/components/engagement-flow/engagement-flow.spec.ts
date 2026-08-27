import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EngagementFlow } from './engagement-flow';

describe('EngagementFlow', () => {
  let component: EngagementFlow;
  let fixture: ComponentFixture<EngagementFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngagementFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(EngagementFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
