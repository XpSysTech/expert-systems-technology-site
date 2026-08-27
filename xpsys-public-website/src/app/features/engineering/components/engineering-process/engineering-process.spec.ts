import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EngineeringProcess } from './engineering-process';

describe('EngineeringProcess', () => {
  let component: EngineeringProcess;
  let fixture: ComponentFixture<EngineeringProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringProcess],
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringProcess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
