/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PodcastService } from './podcast.service';

describe('Service: Podcast', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PodcastService]
    });
  });

  it('should ...', inject([PodcastService], (service: PodcastService) => {
    expect(service).toBeTruthy();
  }));
});
