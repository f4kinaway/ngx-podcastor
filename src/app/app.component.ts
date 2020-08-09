import { Component } from '@angular/core';

import { PodcastsService } from './services/podcasts.service';
import { HttpClient } from '@angular/common/http';
import { Podcast } from './models/podcast.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'ngx-podcastor';
  public sync = false;

  constructor(private podcastsService: PodcastsService, private http: HttpClient) {
  }

  public updateAllPodcasts(): void {
    this.sync = true;
    this.podcastsService.updateAllPodcast()
      .subscribe(() => window.location.reload());
  }

  public resetPodcasts(): void {
    this.podcastsService.resetPodcasts().subscribe(() =>  window.location.reload());
  }

  public export(): void {
    this.podcastsService.getPodcasts().subscribe(podcasts => {
      const exportJson = JSON.stringify(podcasts);
      const el = document.createElement('a');
      el.setAttribute('href', 'data:text/json;charset=UTF-8,' + encodeURIComponent(exportJson));
      el.setAttribute('download', 'podcastor-export.json');
      el.style.display = 'none';
      document.body.appendChild(el);
      el.click();
      document.body.removeChild(el);
    });
  }

  // tslint:disable-next-line:no-any
  public import(event: any): void {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    this.http.get<Podcast[]>(url).subscribe(podcasts =>
      this.podcastsService.importPodcasts(podcasts).subscribe(() => window.location.reload())
    );
  }
}
