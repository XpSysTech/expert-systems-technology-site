import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiningResources } from './mining-resources';

describe('MiningResources', () => {
  let component: MiningResources;
  let fixture: ComponentFixture<MiningResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiningResources],
    }).compileComponents();

    fixture = TestBed.createComponent(MiningResources);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
