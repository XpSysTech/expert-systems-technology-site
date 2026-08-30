import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatementBlock } from './statement-block';

describe('StatementBlock', () => {
  let component: StatementBlock;
  let fixture: ComponentFixture<StatementBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatementBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(StatementBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
