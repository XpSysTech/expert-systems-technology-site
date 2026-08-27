import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PharmacyIntelligencePreview } from './pharmacy-intelligence-preview';

describe('PharmacyIntelligencePreview', () => {
  let component: PharmacyIntelligencePreview;
  let fixture: ComponentFixture<PharmacyIntelligencePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyIntelligencePreview],
    }).compileComponents();

    fixture = TestBed.createComponent(PharmacyIntelligencePreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
