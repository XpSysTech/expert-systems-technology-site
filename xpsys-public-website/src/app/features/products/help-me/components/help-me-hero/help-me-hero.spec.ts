import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpMeHero } from './help-me-hero';

describe('HelpMeHero', () => {
  let component: HelpMeHero;
  let fixture: ComponentFixture<HelpMeHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpMeHero],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpMeHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
