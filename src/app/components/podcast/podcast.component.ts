import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PodcastService } from 'src/app/services/podcast.service';
import { Podcast } from 'src/app/models/podcast.model';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit, OnDestroy {

  public feed!: Podcast;
  private subscription = new Subscription();

  constructor(private route: ActivatedRoute, private podcastService: PodcastService, private router: Router) { }

  public ngOnInit(): void {
    this.subscription.add(this.route.queryParamMap.subscribe(params => {
      const url = params.get('url');
      if (url) {
        this.podcastService.getPodcast(url).subscribe(feed => {
          this.feed = feed;
        });
      }
    }));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public addPodcast(podcast: Podcast): void {
    this.podcastService.addPodcast(podcast)
      .subscribe(() => this.podcastService.getPodcast(podcast.url)
        .subscribe(feed => {
          this.feed = feed;
        }));
  }

  public deletePodcast(podcast: Podcast): void {
    this.podcastService.deletePodcast(podcast)
      .subscribe(() => this.podcastService.getPodcast(podcast.url)
        .subscribe(feed => {
          this.feed = feed;
        }));
  }

  public completeAllEpisodes(podcast: Podcast): void {
    this.podcastService.completeAllEpisodes(podcast)
      .subscribe(() => this.podcastService.getPodcast(this.feed.url)
        .subscribe(feed => {
          this.feed = feed;
        }));
  }

  public updatePodcast(podcast: Podcast): void {
    this.podcastService.updatePodcast(podcast)
      .subscribe(() => this.podcastService.getPodcast(this.feed.url)
        .subscribe(feed => {
          this.feed = feed;
        }));
  }

}
