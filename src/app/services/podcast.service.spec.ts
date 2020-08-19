import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { PodcastService } from './podcast.service';
import { IdbService } from './idb.service';
import { MockIdbService } from '../../../mocks/services/mock.idb.service';
import { MockHttpClient } from 'mocks/services/mock.http.service';

describe('Service: Podcast', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PodcastService,
        { provide: HttpClient, useClass: MockHttpClient },
        { provide: IdbService, useClass: MockIdbService }
      ]
    });
  });

  it('should ...', inject([PodcastService], (service: PodcastService) => {
    expect(service).toBeTruthy();
  }));
});
