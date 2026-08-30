import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataStat } from './data-stat';

describe('DataStat', () => {
  let component: DataStat;
  let fixture: ComponentFixture<DataStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataStat],
    }).compileComponents();

    fixture = TestBed.createComponent(DataStat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
