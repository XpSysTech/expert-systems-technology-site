import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndustryHero } from './industry-hero';

describe('IndustryHero', () => {
  let component: IndustryHero;
  let fixture: ComponentFixture<IndustryHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryHero],
    }).compileComponents();

    fixture = TestBed.createComponent(IndustryHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
