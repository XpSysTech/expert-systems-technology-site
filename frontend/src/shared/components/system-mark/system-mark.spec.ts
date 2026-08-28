import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemMark } from './system-mark';

describe('SystemMark', () => {
  let component: SystemMark;
  let fixture: ComponentFixture<SystemMark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemMark],
    }).compileComponents();

    fixture = TestBed.createComponent(SystemMark);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
