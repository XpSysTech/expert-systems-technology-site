import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EngineeringPhilosophy } from './engineering-philosophy';

describe('EngineeringPhilosophy', () => {
  let component: EngineeringPhilosophy;
  let fixture: ComponentFixture<EngineeringPhilosophy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringPhilosophy],
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringPhilosophy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
