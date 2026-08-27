import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicrositeHeader } from './microsite-header';

describe('MicrositeHeader', () => {
  let component: MicrositeHeader;
  let fixture: ComponentFixture<MicrositeHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrositeHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(MicrositeHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
