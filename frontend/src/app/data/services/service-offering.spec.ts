import { TestBed } from '@angular/core/testing';
import { ServiceOffering } from './service-offering';

describe('ServiceOffering', () => {
  let service: ServiceOffering;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOffering);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
