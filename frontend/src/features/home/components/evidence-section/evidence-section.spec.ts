import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvidenceSection } from './evidence-section';

describe('EvidenceSection', () => {
  let component: EvidenceSection;
  let fixture: ComponentFixture<EvidenceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvidenceSection],
    }).compileComponents();

    fixture = TestBed.createComponent(EvidenceSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
