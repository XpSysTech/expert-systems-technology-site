import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndustryChallenges } from './industry-challenges';

describe('IndustryChallenges', () => {
  let component: IndustryChallenges;
  let fixture: ComponentFixture<IndustryChallenges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryChallenges],
    }).compileComponents();

    fixture = TestBed.createComponent(IndustryChallenges);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
