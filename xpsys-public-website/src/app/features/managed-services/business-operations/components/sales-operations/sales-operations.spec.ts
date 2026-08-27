import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesOperations } from './sales-operations';

describe('SalesOperations', () => {
  let component: SalesOperations;
  let fixture: ComponentFixture<SalesOperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesOperations],
    }).compileComponents();

    fixture = TestBed.createComponent(SalesOperations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
