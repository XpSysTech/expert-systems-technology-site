import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ManagedWebPlatform } from './managed-web-platform';

describe('ManagedWebPlatform', () => {
  let fixture: ComponentFixture<ManagedWebPlatform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedWebPlatform],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(ManagedWebPlatform);
    fixture.detectChanges();
  });

  it('renders one primary heading and scoped monthly pricing', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(element.textContent).toContain('Scoped Monthly Engagement');
  });

  it('includes the guided platform scoping form', () => {
    expect(fixture.nativeElement.querySelector('app-platform-scope-form')).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Scope My Platform');
  });
});
