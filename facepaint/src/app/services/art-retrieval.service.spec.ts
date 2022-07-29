import { TestBed } from '@angular/core/testing';

import { ArtRetrievalService } from './art-retrieval.service';

describe('ArtRetrievalService', () => {
  let service: ArtRetrievalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtRetrievalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
