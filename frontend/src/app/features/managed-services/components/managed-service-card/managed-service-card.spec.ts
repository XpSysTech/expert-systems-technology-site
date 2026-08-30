import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagedServiceCard } from './managed-service-card';

describe('ManagedServiceCard', () => {
  let component: ManagedServiceCard;
  let fixture: ComponentFixture<ManagedServiceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedServiceCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagedServiceCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
