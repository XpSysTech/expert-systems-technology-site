import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreThesis } from './core-thesis';

describe('CoreThesis', () => {
  let component: CoreThesis;
  let fixture: ComponentFixture<CoreThesis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreThesis],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreThesis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
