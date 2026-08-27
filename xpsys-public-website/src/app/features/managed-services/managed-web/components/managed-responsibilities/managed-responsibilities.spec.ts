import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagedResponsibilities } from './managed-responsibilities';

describe('ManagedResponsibilities', () => {
  let component: ManagedResponsibilities;
  let fixture: ComponentFixture<ManagedResponsibilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedResponsibilities],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagedResponsibilities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
