import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataFlow } from './data-flow';

describe('DataFlow', () => {
  let component: DataFlow;
  let fixture: ComponentFixture<DataFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(DataFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
