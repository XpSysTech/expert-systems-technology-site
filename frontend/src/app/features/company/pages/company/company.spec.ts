import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Company } from './company';

describe('Company', () => {
  let fixture: ComponentFixture<Company>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Company],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Company);
    await fixture.whenStable();
  });

  it('presents the company identity, linked areas and direction', () => {
    const content = fixture.nativeElement.textContent as string;

    expect(content).toContain('Systems for work that needs to work.');
    expect(content).toContain('A company built around the operation.');
    expect(content).toContain('Build. Operate. Learn.');
  });

  it('provides a destination for every XpSys area without an industry-focus section', () => {
    const content = fixture.nativeElement.textContent as string;

    expect(fixture.nativeElement.querySelectorAll('.company-principle a')).toHaveLength(6);
    expect(fixture.nativeElement.textContent).toContain('Careers at XpSys');
    expect(fixture.nativeElement.textContent).toContain('Partners and affiliations');
    expect(content).not.toContain('Where we are focused');
  });
});
