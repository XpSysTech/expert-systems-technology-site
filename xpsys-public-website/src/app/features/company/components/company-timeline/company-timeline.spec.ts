import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyTimeline } from './company-timeline';

describe('CompanyTimeline', () => {
  let component: CompanyTimeline;
  let fixture: ComponentFixture<CompanyTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyTimeline],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyTimeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
