import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Overview } from './overview';

describe('SoftwareEngineeringServicesOverview', () => {
  let fixture: ComponentFixture<Overview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overview],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Overview);
    await fixture.whenStable();
  });

  it('creates the software engineering services page', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
