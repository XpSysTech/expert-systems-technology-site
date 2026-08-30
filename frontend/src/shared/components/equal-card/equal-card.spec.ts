import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { EqualCard } from './equal-card';

describe('EqualCard', () => {
  let fixture: ComponentFixture<EqualCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EqualCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EqualCard);
    fixture.componentRef.setInput('content', {
      code: '01 / TEST',
      title: 'Aligned card',
      description: 'A deliberately longer description that can be expanded when the card needs more room.',
      expandable: true,
    });
    await fixture.whenStable();
  });

  it('renders the card content', () => {
    expect(fixture.nativeElement.textContent).toContain('Aligned card');
  });

  it('expands and collapses long content', () => {
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.getAttribute('aria-expanded')).toBe('false');

    button.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(button.textContent).toContain('Read less');
  });
});
