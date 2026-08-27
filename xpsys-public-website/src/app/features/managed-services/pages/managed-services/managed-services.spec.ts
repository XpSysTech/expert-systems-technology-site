import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagedServices } from './managed-services';

describe('ManagedServices', () => {
  let component: ManagedServices;
  let fixture: ComponentFixture<ManagedServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedServices],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagedServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
