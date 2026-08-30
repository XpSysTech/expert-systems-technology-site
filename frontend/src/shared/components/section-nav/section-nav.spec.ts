import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SectionNav } from './section-nav';

describe('SectionNav', () => {
  let fixture: ComponentFixture<SectionNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionNav],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionNav);
    fixture.componentRef.setInput('items', [{ label: 'Overview', path: '/' }]);
    await fixture.whenStable();
  });

  it('renders the supplied navigation items', () => {
    expect(fixture.nativeElement.textContent).toContain('Overview');
  });
});
