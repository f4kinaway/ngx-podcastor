import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable, from, of, zip } from 'rxjs';
import Parser from 'rss-parser';

import { IdbService } from '../services/idb.service';
import { Podcast } from '../models/podcast.model';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor(private http: HttpClient, private idb: IdbService) { }

  public getPodcast(feedUrl: string): Observable<Podcast> {
    return this.getPodcastFromDB(feedUrl).pipe(switchMap(podcast => {
      if (podcast) {
        return of(podcast);
      } else {
        return this.getPodcastFromRSS(feedUrl);
      }
    }));
  }

  public getPodcastFromRSS(feedUrl: string): Observable<Podcast> {
    const feedUrlTransfo = feedUrl.includes('feeds.feedburner.com') ? feedUrl + '?format=xml' : feedUrl;
    const url = `https://cors-anywhere.herokuapp.com/${feedUrlTransfo}`;
    const options = { responseType: 'text' as const, };
    return this.http.get(url, options).pipe(switchMap(xml => {
      const feed = xml;
      const parser = new Parser();
      const parseString = parser.parseString.bind(parser);
      return new Observable<Podcast>(observer => {
        const parseCallback = (result: Parser.Output) => {
          observer.next(Podcast.fromRSS(result, feedUrl));
          observer.complete();
        };
        parseString(feed, (err: Error, result: Parser.Output) => {
          parseCallback(result);
        });
      });
    }));
  }

  public getPodcastFromDB(feedUrl: string): Observable<Podcast | undefined> {
    return from(this.idb.getPodcast(feedUrl));
  }

  public updatePodcast(podcast: Podcast): Observable<boolean> {
    return zip(this.getPodcastFromDB(podcast.url), this.getPodcastFromRSS(podcast.url))
      .pipe(switchMap(res => {
        const dbPodcast =  res[0];
        const rssPodcast = res[1];
        if (dbPodcast && dbPodcast.episodes.length < rssPodcast.episodes.length) {
          const newEpisodes = rssPodcast.episodes.slice(0, rssPodcast.episodes.length - dbPodcast.episodes.length);
          dbPodcast.episodes = [...dbPodcast.episodes, ...newEpisodes];
          return from(this.idb.updatePodcast(dbPodcast));
        } else {
          return of(true);
        }
      }));
  }

  public addPodcast(podcast: Podcast): Observable<boolean> {
    podcast.subscribed = true;
    return from(this.idb.addPodcast(podcast));
  }

  public deletePodcast(podcast: Podcast): Observable<boolean> {
    return from(this.idb.deletePodcast(podcast.url));
  }

  public completeAllEpisodes(podcast: Podcast): Observable<boolean> {
    podcast.episodes.forEach(episode => episode.completed = true);
    return from(this.idb.updatePodcast(podcast));
  }

  public completeEpisode(podcast: Podcast, episodeIndex: number): Observable<boolean> {
    podcast.episodes[episodeIndex].completed = true;
    return from(this.idb.updatePodcast(podcast));
  }

  public uncompleteEpisode(podcast: Podcast, episodeIndex: number): Observable<boolean> {
    podcast.episodes[episodeIndex].completed = false;
    return from(this.idb.updatePodcast(podcast));
  }

  public downloadEpisode(podcast: Podcast, episodeIndex: number): Observable<boolean | number> {
    const url = 'https://cors-anywhere.herokuapp.com/' + podcast.episodes[episodeIndex].enclosure.url;
    const options = {
      responseType: 'blob' as 'json',
      reportProgress: true
    };
    const req = new HttpRequest('GET', url, null, options);
    return this.http.request<Blob>(req).pipe(switchMap(event => {
      if (event.type === HttpEventType.Response) {
        const blob = event.body;
        podcast.episodes[episodeIndex].downloaded = blob;
        return from(this.idb.updatePodcast(podcast));
      } else if (event.type === HttpEventType.DownloadProgress) {
        // Compute and show the % done:
        const percentDone = event.total ? Math.round(100 * event.loaded / event.total) : 0;
        return of(percentDone);
      } else {
        return of(0);
      }
    }));
  }

  public deleteEpisode(podcast: Podcast, episodeIndex: number): Observable<boolean> {
    podcast.episodes[episodeIndex].downloaded = null;
    return from(this.idb.updatePodcast(podcast));
  }

}
