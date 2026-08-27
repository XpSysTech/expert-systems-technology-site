import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PharmacyHero } from './pharmacy-hero';

describe('PharmacyHero', () => {
  let component: PharmacyHero;
  let fixture: ComponentFixture<PharmacyHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyHero],
    }).compileComponents();

    fixture = TestBed.createComponent(PharmacyHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
