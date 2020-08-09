import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Podcast } from 'src/app/models/podcast.model';

@Component({
  selector: 'app-podcasts-cover',
  templateUrl: './podcasts-cover.component.html',
  styleUrls: ['./podcasts-cover.component.scss']
})
export class PodcastsCoverComponent implements OnChanges {

  @Input() podcast!: Podcast;
  public notCompleted = 0;

  public ngOnChanges(changes: SimpleChanges): void {
    this.notCompleted = this.podcast.episodes.filter(episode => !episode.completed).length;
  }

}
