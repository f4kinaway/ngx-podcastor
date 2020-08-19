import { Observable, of } from 'rxjs';

import { Podcast } from '../../src/app/models/podcast.model';
import { MockPodcast } from '../models/mock.podcast.model';

export class MockPodcastsService {
  public getPodcasts(): Observable<Podcast[]> { return of([MockPodcast]); }
  public updateAllPodcast(): Observable<boolean> { return of(true); }
  public resetPodcasts(): Observable<boolean> { return of(true); }
  public importPodcasts(podcasts: Podcast[]): Observable<boolean> { return of(true); }
}
