import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntelligenceLayer } from './intelligence-layer';

describe('IntelligenceLayer', () => {
  let component: IntelligenceLayer;
  let fixture: ComponentFixture<IntelligenceLayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntelligenceLayer],
    }).compileComponents();

    fixture = TestBed.createComponent(IntelligenceLayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
