import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CtaLink } from './cta-link';

describe('CtaLink', () => {
  let component: CtaLink;
  let fixture: ComponentFixture<CtaLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaLink],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
