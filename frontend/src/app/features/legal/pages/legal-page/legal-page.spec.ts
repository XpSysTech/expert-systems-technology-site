import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { LegalPage } from './legal-page';

describe('LegalPage', () => {
  let fixture: ComponentFixture<LegalPage>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalPage],
      providers: [provideRouter([]), { provide: ActivatedRoute, useValue: { snapshot: { data: { policy: 'privacy' } } } }],
    }).compileComponents();
    fixture = TestBed.createComponent(LegalPage);
    await fixture.whenStable();
  });
  it('renders complete privacy content with one primary heading', () => {
    expect(fixture.nativeElement.querySelectorAll('h1')).toHaveLength(1);
    expect(fixture.nativeElement.textContent).toContain('Information we collect');
    expect(fixture.nativeElement.textContent).toContain('Retention and protection');
  });
});
