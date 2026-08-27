import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrustOverview } from './trust-overview';

describe('TrustOverview', () => {
  let component: TrustOverview;
  let fixture: ComponentFixture<TrustOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(TrustOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
