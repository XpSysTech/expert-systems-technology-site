import { TestBed } from '@angular/core/testing';
import { CaseStudy } from './case-study';

describe('CaseStudy', () => {
  let service: CaseStudy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseStudy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
