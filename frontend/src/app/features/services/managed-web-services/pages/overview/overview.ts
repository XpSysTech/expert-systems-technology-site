import { Component } from '@angular/core';
import { ServicePage } from '../../../../../../shared/components/service-page/service-page';

@Component({
  imports: [ServicePage],
  selector: 'app-managed-web-services-overview',
  styleUrl: './overview.scss',
  templateUrl: './overview.html',
})
export class Overview {}
