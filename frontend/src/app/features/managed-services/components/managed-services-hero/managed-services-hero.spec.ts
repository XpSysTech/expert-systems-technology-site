import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagedServicesHero } from './managed-services-hero';

describe('ManagedServicesHero', () => {
  let component: ManagedServicesHero;
  let fixture: ComponentFixture<ManagedServicesHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedServicesHero],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagedServicesHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
