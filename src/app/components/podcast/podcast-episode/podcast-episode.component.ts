import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Podcast } from 'src/app/models/podcast.model';
import { Episode } from 'src/app/models/episode.model';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
  selector: 'app-podcast-episode',
  templateUrl: './podcast-episode.component.html',
  styleUrls: ['./podcast-episode.component.scss']
})
export class PodcastEpisodeComponent {

  @Input() feed!: Podcast;
  @Input() episode!: Episode;
  @Input() index!: number;
  public progress = 0;

  constructor(private podcastService: PodcastService, private router: Router) { }

  public playEpisode(feed: Podcast, i: number): void {
    this.router.navigate(['episode'], { queryParams: { url: feed.url, index: i } });
  }

  public completeEpisode(podcast: Podcast, episodeIndex: number): void {
    this.podcastService.completeEpisode(podcast, episodeIndex)
      .subscribe(() => this.podcastService.getPodcast(this.feed.url)
        .subscribe(feed => {
          this.feed = feed;
        }));
  }

  public uncompleteEpisode(podcast: Podcast, episodeIndex: number): void {
    this.podcastService.uncompleteEpisode(podcast, episodeIndex)
      .subscribe(() => this.podcastService.getPodcast(this.feed.url)
        .subscribe(feed => {
          this.feed = feed;
        }));
  }

  public downloadEpisode(podcast: Podcast, episodeIndex: number): void {
    this.podcastService.downloadEpisode(podcast, episodeIndex)
      .subscribe(res => {
        if (typeof res === 'number') {
          this.progress = res;
        } else {
          this.progress = 0;
          this.podcastService.getPodcast(this.feed.url)
          .subscribe(feed => {
            this.episode = feed.episodes[episodeIndex];
          });
        }
      });
  }

  public deleteEpisode(podcast: Podcast, episodeIndex: number): void {
    this.podcastService.deleteEpisode(podcast, episodeIndex)
      .subscribe(() => this.podcastService.getPodcast(this.feed.url)
        .subscribe(feed => {
          this.feed = feed;
        }));
  }


}
