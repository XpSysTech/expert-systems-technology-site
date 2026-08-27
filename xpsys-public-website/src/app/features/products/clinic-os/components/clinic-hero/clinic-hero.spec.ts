import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicHero } from './clinic-hero';

describe('ClinicHero', () => {
  let component: ClinicHero;
  let fixture: ComponentFixture<ClinicHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicHero],
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
