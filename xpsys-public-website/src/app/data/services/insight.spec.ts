import { TestBed } from '@angular/core/testing';
import { Insight } from './insight';

describe('Insight', () => {
  let service: Insight;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Insight);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
