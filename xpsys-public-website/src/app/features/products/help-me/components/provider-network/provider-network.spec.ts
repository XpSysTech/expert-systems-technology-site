import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProviderNetwork } from './provider-network';

describe('ProviderNetwork', () => {
  let component: ProviderNetwork;
  let fixture: ComponentFixture<ProviderNetwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderNetwork],
    }).compileComponents();

    fixture = TestBed.createComponent(ProviderNetwork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
