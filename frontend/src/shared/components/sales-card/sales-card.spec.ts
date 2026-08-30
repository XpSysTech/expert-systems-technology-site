import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SalesCard } from './sales-card';

describe('SalesCard', () => {
  let fixture: ComponentFixture<SalesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SalesCard);
    fixture.componentRef.setInput('content', {
      code: '01 / PRODUCT',
      title: 'Clinic OS',
      audience: 'Clinical teams',
      outcome: 'One dependable clinical record.',
      description: 'Connected workflows for daily care.',
      capabilities: ['Patient records', 'Operational reporting'],
      path: '/products/clinic-os',
      action: 'Explore Clinic OS',
    });
    await fixture.whenStable();
  });

  it('renders the complete sales proposition and destination', () => {
    const content = fixture.nativeElement.textContent as string;
    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement | null;

    expect(content).toContain('Clinic OS');
    expect(content).toContain('Patient records');
    expect(link?.getAttribute('href')).toBe('/products/clinic-os');
  });
});
