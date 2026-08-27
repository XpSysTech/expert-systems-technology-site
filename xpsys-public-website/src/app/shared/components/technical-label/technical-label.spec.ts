import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnicalLabel } from './technical-label';

describe('TechnicalLabel', () => {
  let component: TechnicalLabel;
  let fixture: ComponentFixture<TechnicalLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalLabel],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicalLabel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
