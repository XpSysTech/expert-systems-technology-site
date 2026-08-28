import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicIntelligencePreview } from './clinic-intelligence-preview';

describe('ClinicIntelligencePreview', () => {
  let component: ClinicIntelligencePreview;
  let fixture: ComponentFixture<ClinicIntelligencePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicIntelligencePreview],
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicIntelligencePreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
