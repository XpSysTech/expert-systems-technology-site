import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchitectureDiagram } from './architecture-diagram';

describe('ArchitectureDiagram', () => {
  let component: ArchitectureDiagram;
  let fixture: ComponentFixture<ArchitectureDiagram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureDiagram],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureDiagram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
