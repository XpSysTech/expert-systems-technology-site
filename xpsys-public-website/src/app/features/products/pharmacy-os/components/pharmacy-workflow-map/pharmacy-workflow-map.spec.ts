import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PharmacyWorkflowMap } from './pharmacy-workflow-map';

describe('PharmacyWorkflowMap', () => {
  let component: PharmacyWorkflowMap;
  let fixture: ComponentFixture<PharmacyWorkflowMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyWorkflowMap],
    }).compileComponents();

    fixture = TestBed.createComponent(PharmacyWorkflowMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
