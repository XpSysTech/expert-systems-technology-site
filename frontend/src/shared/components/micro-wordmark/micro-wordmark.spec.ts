import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicroWordmark } from './micro-wordmark';

describe('MicroWordmark', () => {
  let component: MicroWordmark;
  let fixture: ComponentFixture<MicroWordmark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroWordmark],
    }).compileComponents();

    fixture = TestBed.createComponent(MicroWordmark);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
