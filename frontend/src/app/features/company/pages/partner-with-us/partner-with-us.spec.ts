import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerWithUs } from './partner-with-us';

describe('PartnerWithUs', () => {
  let fixture: ComponentFixture<PartnerWithUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerWithUs],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerWithUs);
    fixture.detectChanges();
  });

  it('collects the information needed to start a partnership conversation', () => {
    const fields = fixture.nativeElement.querySelectorAll('input, select, textarea');

    expect(fixture.nativeElement.querySelectorAll('h1')).toHaveLength(1);
    expect(fixture.nativeElement.textContent).toContain('Primary expertise');
    expect(fixture.nativeElement.textContent).toContain('Proposed collaboration');
    expect(fields.length).toBeGreaterThan(6);
  });

  it('confirms that a submitted partnership enquiry has been passed on', () => {
    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;

    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Your partnership enquiry has been passed to our team for review.');
  });
});
