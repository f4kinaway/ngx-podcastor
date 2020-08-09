import { Injectable } from '@angular/core';
import { Observable, from, zip, of } from 'rxjs';

import { IdbService } from '../services/idb.service';
import { Podcast } from '../models/podcast.model';
import { switchMap } from 'rxjs/operators';
import { PodcastService } from './podcast.service';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  constructor(private idb: IdbService, private podcastService: PodcastService) { }

  public getPodcasts(): Observable<Podcast[]> {
    return from(this.idb.getPodcasts());
  }

  // tslint:disable-next-line:no-any
  public updateAllPodcast(): Observable<boolean> {
    return this.getPodcasts().pipe(
      switchMap((podcasts) => {
        const obs = podcasts.map(podcast => this.podcastService.updatePodcast(podcast));
        return zip(...obs).pipe(switchMap(() => of(true)));
      })
    );
  }

  public resetPodcasts(): Observable<boolean> {
    return from(this.idb.resetPodcasts());
  }

  public importPodcasts(podcasts: Podcast[]): Observable<boolean> {
    return this.resetPodcasts().pipe(
      switchMap(() => {
        const obs = podcasts.map(podcast => this.podcastService.addPodcast(podcast));
        return zip(...obs).pipe(switchMap(() => of(true)));
      })
    );
  }

}
