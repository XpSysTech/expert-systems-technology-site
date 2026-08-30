import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessFlow } from './process-flow';

describe('ProcessFlow', () => {
  let component: ProcessFlow;
  let fixture: ComponentFixture<ProcessFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
