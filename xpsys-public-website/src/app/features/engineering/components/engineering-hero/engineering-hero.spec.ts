import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EngineeringHero } from './engineering-hero';

describe('EngineeringHero', () => {
  let component: EngineeringHero;
  let fixture: ComponentFixture<EngineeringHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringHero],
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
