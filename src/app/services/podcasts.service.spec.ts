import { TestBed, inject } from '@angular/core/testing';
import { PodcastsService } from './podcasts.service';
import { IdbService } from './idb.service';
import { MockIdbService } from '../../../mocks/services/mock.idb.service';
import { PodcastService } from './podcast.service';
import { MockPodcastService } from '../../../mocks/services/mock.podcast.service';

describe('Service: Podcasts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PodcastsService,
        { provide: IdbService, useClass: MockIdbService },
        { provide: PodcastService, useClass: MockPodcastService }
      ]
    });
  });

  it('should ...', inject([PodcastsService], (service: PodcastsService) => {
    expect(service).toBeTruthy();
  }));
});
