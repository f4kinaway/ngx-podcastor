import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { SearchService } from './search.service';
import { MockHttpClient } from 'mocks/services/mock.http.service';

describe('Service: Search', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchService,
        { provide: HttpClient, useClass: MockHttpClient },
      ]
    });
  });

  it('should ...', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
