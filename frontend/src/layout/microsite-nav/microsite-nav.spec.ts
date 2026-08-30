import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicrositeNav } from './microsite-nav';

describe('MicrositeNav', () => {
  let component: MicrositeNav;
  let fixture: ComponentFixture<MicrositeNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrositeNav],
    }).compileComponents();

    fixture = TestBed.createComponent(MicrositeNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
