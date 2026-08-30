import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DirectoryPage } from './directory-page';

describe('DirectoryPage', () => {
  let fixture: ComponentFixture<DirectoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectoryPage],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                directoryPage: {
                  eyebrow: 'TEST / DIRECTORY',
                  title: 'Our Offerings',
                  introduction: 'Choose an offering.',
                  items: [
                    {
                      code: '/0.1',
                      marker: 'P',
                      title: 'Products',
                      description: 'Owned operational software.',
                      path: '/products',
                      action: 'Explore products',
                    },
                  ],
                },
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectoryPage);
    await fixture.whenStable();
  });

  it('renders editorial directory rows with working destinations', () => {
    const content = fixture.nativeElement.textContent as string;
    const link = fixture.nativeElement.querySelector('.directory-row') as HTMLAnchorElement | null;

    expect(content).toContain('Our Offerings');
    expect(content).toContain('Products');
    expect(fixture.nativeElement.querySelector('.directory-section__header')).toBeNull();
    expect(link?.getAttribute('href')).toBe('/products');
  });
});
