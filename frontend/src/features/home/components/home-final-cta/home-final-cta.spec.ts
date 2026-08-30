import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFinalCta } from './home-final-cta';

describe('HomeFinalCta', () => {
  let component: HomeFinalCta;
  let fixture: ComponentFixture<HomeFinalCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFinalCta],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFinalCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
