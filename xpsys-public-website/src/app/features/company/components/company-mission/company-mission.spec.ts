import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyMission } from './company-mission';

describe('CompanyMission', () => {
  let component: CompanyMission;
  let fixture: ComponentFixture<CompanyMission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyMission],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyMission);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
