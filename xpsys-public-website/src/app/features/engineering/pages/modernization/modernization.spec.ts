import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Modernization } from './modernization';

describe('Modernization', () => {
  let component: Modernization;
  let fixture: ComponentFixture<Modernization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modernization],
    }).compileComponents();

    fixture = TestBed.createComponent(Modernization);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
