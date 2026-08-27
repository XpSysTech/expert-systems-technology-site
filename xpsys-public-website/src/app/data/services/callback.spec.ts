import { TestBed } from '@angular/core/testing';
import { Callback } from './callback';

describe('Callback', () => {
  let service: Callback;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Callback);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
