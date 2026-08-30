import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Government } from './government';

describe('Government', () => {
  let component: Government;
  let fixture: ComponentFixture<Government>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Government],
    }).compileComponents();

    fixture = TestBed.createComponent(Government);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
