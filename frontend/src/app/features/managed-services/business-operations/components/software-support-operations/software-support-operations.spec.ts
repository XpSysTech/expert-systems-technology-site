import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareSupportOperations } from './software-support-operations';

describe('SoftwareSupportOperations', () => {
  let component: SoftwareSupportOperations;
  let fixture: ComponentFixture<SoftwareSupportOperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareSupportOperations],
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareSupportOperations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
