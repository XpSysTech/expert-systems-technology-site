import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { CompanyDetail } from './company-detail';

describe('CompanyDetail', () => {
  let fixture: ComponentFixture<CompanyDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDetail],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                companyPage: {
                  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / COMPANY / ENGINEERING',
                  title: 'Engineering philosophy',
                  introduction: 'Engineering starts with the operating context.',
                  marker: 'E',
                  items: [
                    { code: '01 / CONTEXT', title: 'Understand first.', description: 'Start with real work.' },
                    { code: '04 / CONFIDENTIALITY', title: 'Request only what the work needs.', description: 'Sensitive information remains with the team responsible for the work.' },
                  ],
                  ctaLabel: 'Talk to an engineer',
                  ctaPath: '/contact',
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CompanyDetail);
    fixture.detectChanges();
  });

  it('renders one primary heading and the industries-style watermark marker', () => {
    expect(fixture.nativeElement.querySelectorAll('h1')).toHaveLength(1);
    expect(fixture.nativeElement.querySelector('.company-detail-row__marker')?.textContent).toContain('E');
    expect(fixture.nativeElement.textContent).toContain('Engineering philosophy');
  });

  it('presents confidentiality as an engineering practice', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain('Request only what the work needs.');
    expect(element.textContent).toContain('Sensitive information remains with the team responsible for the work.');
    expect(element.querySelectorAll('.company-detail-row')).toHaveLength(2);
  });
});
