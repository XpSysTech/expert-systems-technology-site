import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { CareerDetail } from './career-detail';

describe('CareerDetail', () => {
  let fixture: ComponentFixture<CareerDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerDetail],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: { snapshot: { data: { careerPage: 'open-positions' } } } },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CareerDetail);
    fixture.detectChanges();
  });

  it('renders one primary heading and an honest current-position table', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(element.querySelectorAll('tbody tr')).toHaveLength(4);
    expect(element.textContent).toContain('No role currently published');
    expect(element.textContent).toContain('Learn about getting hired');
  });

  it('uses the shared microsite navigation and product-style hero actions', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('app-section-nav')).toBeTruthy();
    expect(element.querySelectorAll('.career-detail-hero__actions a')).toHaveLength(2);
    expect(element.textContent).toContain('Careers overview');
  });
});
