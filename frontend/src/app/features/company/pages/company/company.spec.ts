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

  it('presents the company purpose, operating principles and direction', () => {
    const content = fixture.nativeElement.textContent as string;

    expect(content).toContain('Why we’re here');
    expect(content).toContain('What we do');
    expect(content).toContain('Where we’re going');
  });

  it('provides a destination for every operating principle', () => {
    expect(fixture.nativeElement.querySelectorAll('.company-principle a')).toHaveLength(5);
  });
});
