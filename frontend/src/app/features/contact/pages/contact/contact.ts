import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly submitted = signal(false);

  protected submitEnquiry(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
  }
}
