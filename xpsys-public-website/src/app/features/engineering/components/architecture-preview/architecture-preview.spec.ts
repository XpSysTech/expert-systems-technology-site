import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchitecturePreview } from './architecture-preview';

describe('ArchitecturePreview', () => {
  let component: ArchitecturePreview;
  let fixture: ComponentFixture<ArchitecturePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitecturePreview],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitecturePreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
