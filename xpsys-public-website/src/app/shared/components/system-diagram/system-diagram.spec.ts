import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemDiagram } from './system-diagram';

describe('SystemDiagram', () => {
  let component: SystemDiagram;
  let fixture: ComponentFixture<SystemDiagram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDiagram],
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDiagram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
