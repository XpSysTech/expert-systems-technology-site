import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicWorkflowMap } from './clinic-workflow-map';

describe('ClinicWorkflowMap', () => {
  let component: ClinicWorkflowMap;
  let fixture: ComponentFixture<ClinicWorkflowMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicWorkflowMap],
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicWorkflowMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
