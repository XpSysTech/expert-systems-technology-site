import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqList } from './faq-list';

describe('FaqList', () => {
  let component: FaqList;
  let fixture: ComponentFixture<FaqList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqList],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqList);
    fixture.componentRef.setInput('items', [
      ['What happens next?', 'A member of the team will call you.'],
      ['Can I change scope?', 'Yes, before the scope is confirmed.'],
    ]);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('opens one accessible answer at a time', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    buttons[0].click();
    fixture.detectChanges();

    expect(buttons[0].getAttribute('aria-expanded')).toBe('true');
    expect(fixture.nativeElement.textContent).toContain('A member of the team will call you.');

    buttons[1].click();
    fixture.detectChanges();
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false');
    expect(buttons[1].getAttribute('aria-expanded')).toBe('true');
  });
});
