import { Observable, of } from 'rxjs';

import { Podcast } from '../../src/app/models/podcast.model';
import { MockPodcast } from '../models/mock.podcast.model';

export class MockPodcastService {
  public getPodcast(feedUrl: string): Observable<Podcast> { return of(MockPodcast); }
  public getPodcastFromRSS(feedUrl: string): Observable<Podcast> { return of(MockPodcast); }
  public getPodcastFromDB(feedUrl: string): Observable<Podcast | undefined> { return of(MockPodcast); }
  public updatePodcast(podcast: Podcast): Observable<boolean> { return of(true); }
  public addPodcast(podcast: Podcast): Observable<boolean> { return of(true); }
  public deletePodcast(podcast: Podcast): Observable<boolean> { return of(true); }
  public completeAllEpisodes(podcast: Podcast): Observable<boolean> { return of(true); }
  public completeEpisode(podcast: Podcast, episodeIndex: number): Observable<boolean> { return of(true); }
  public uncompleteEpisode(podcast: Podcast, episodeIndex: number): Observable<boolean> { return of(true); }
  public downloadEpisode(podcast: Podcast, episodeIndex: number): Observable<boolean | number> { return of(true); }
  public deleteEpisode(podcast: Podcast, episodeIndex: number): Observable<boolean> { return of(true); }
}
