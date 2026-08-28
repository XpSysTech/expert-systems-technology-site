import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsDataLoop } from './operations-data-loop';

describe('OperationsDataLoop', () => {
  let component: OperationsDataLoop;
  let fixture: ComponentFixture<OperationsDataLoop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsDataLoop],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsDataLoop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
