import { Component, OnInit } from '@angular/core';

// import { PodcastsService } from 'src/app/services/podcasts.service';
// import { Podcast } from 'src/app/models/podcast.model';
import { PodcastsService } from '../../services/podcasts.service';
import { Podcast } from '../../models/podcast.model';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {

  public podcasts: Podcast[] = [];

  constructor(private podcastsService: PodcastsService) { }

  public ngOnInit(): void {
    this.podcastsService.getPodcasts().subscribe(podcasts => this.podcasts = podcasts);
  }

}
