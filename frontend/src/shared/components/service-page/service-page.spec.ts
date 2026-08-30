import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServicePage } from './service-page';

describe('ServicePage', () => {
  let fixture: ComponentFixture<ServicePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicePage);
    fixture.componentRef.setInput('service', 'managed-web-services');
    await fixture.whenStable();
  });

  it('renders the selected service as a standalone micro-site', () => {
    expect(fixture.nativeElement.textContent).toContain('Managed Web Services');
  });

  it('provides micro-site resource and company navigation', () => {
    const content = fixture.nativeElement.textContent as string;
    expect(content).toContain('Documentation');
    expect(content).toContain('Case Studies');
    expect(content).toContain('Community');
    expect(content).toContain('Company');
  });
});
