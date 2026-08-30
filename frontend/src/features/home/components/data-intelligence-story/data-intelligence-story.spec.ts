import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataIntelligenceStory } from './data-intelligence-story';

describe('DataIntelligenceStory', () => {
  let component: DataIntelligenceStory;
  let fixture: ComponentFixture<DataIntelligenceStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataIntelligenceStory],
    }).compileComponents();

    fixture = TestBed.createComponent(DataIntelligenceStory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
