import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PackageComparison } from './package-comparison';

describe('PackageComparison', () => {
  let component: PackageComparison;
  let fixture: ComponentFixture<PackageComparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageComparison],
    }).compileComponents();

    fixture = TestBed.createComponent(PackageComparison);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
