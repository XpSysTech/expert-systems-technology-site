import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndustryCard } from './industry-card';

describe('IndustryCard', () => {
  let component: IndustryCard;
  let fixture: ComponentFixture<IndustryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryCard],
    }).compileComponents();

    fixture = TestBed.createComponent(IndustryCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
