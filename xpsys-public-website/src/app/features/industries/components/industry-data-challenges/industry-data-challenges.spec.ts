import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndustryDataChallenges } from './industry-data-challenges';

describe('IndustryDataChallenges', () => {
  let component: IndustryDataChallenges;
  let fixture: ComponentFixture<IndustryDataChallenges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryDataChallenges],
    }).compileComponents();

    fixture = TestBed.createComponent(IndustryDataChallenges);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
