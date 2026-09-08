import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-partner-with-us',
  styleUrl: './partner-with-us.scss',
  templateUrl: './partner-with-us.html',
})
export class PartnerWithUs {
  protected readonly submitted = signal(false);

  protected submitPartnership(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
  }
}
