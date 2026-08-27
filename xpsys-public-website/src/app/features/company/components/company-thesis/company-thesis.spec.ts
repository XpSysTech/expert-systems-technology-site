import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyThesis } from './company-thesis';

describe('CompanyThesis', () => {
  let component: CompanyThesis;
  let fixture: ComponentFixture<CompanyThesis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyThesis],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyThesis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
