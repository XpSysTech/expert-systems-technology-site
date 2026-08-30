import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { MicroResourcePage } from './micro-resource-page';

describe('MicroResourcePage', () => {
  let fixture: ComponentFixture<MicroResourcePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroResourcePage],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                microPage: {
                  brand: 'Clinic OS',
                  basePath: '/products/clinic-os',
                  code: 'CLINIC OS / DOCUMENTATION',
                  title: 'Documentation',
                  introduction: 'Guidance for understanding and operating Clinic OS.',
                  workflowPath: '/products/clinic-os/workflows',
                },
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MicroResourcePage);
    await fixture.whenStable();
  });

  it('keeps resource pages inside the selected micro-site', () => {
    const content = fixture.nativeElement.textContent as string;
    expect(content).toContain('Clinic OS');
    expect(content).toContain('Documentation');
    expect(content).toContain('Company');
  });
});
