import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSliderChange } from '@angular/material/slider';
import { Subscription, interval, Subject } from 'rxjs';

import { Episode } from 'src/app/models/episode.model';
import { PodcastService } from 'src/app/services/podcast.service';
import { Podcast } from 'src/app/models/podcast.model';
import { StreamState } from 'src/app/interfaces/stream-state.interface';
import { takeUntil, first } from 'rxjs/operators';
import { IdbService } from 'src/app/services/idb.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {

  private audio: HTMLAudioElement | null = new Audio();
  public state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: 0,
    canplay: false,
    error: false,
  };
  private files: Episode[] = [];
  public currentFile!: { index: number, file: Episode };
  public currentPodcast!: Podcast;
  private subscription = new Subscription();
  private stopProgress = new Subject();

  constructor(private route: ActivatedRoute, private podcastService: PodcastService, private router: Router, private idb: IdbService) {
  }

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const url = params.get('url');
      const index = params.get('index');
      if (url && index) {
        this.subscription.add(this.podcastService.getPodcast(url)
          .pipe(first())
          .subscribe(feed => {
            this.resetState();
            this.currentPodcast = feed;
            const i = JSON.parse(index);
            this.openFile(feed.episodes[i], i);
          }));
      }
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public isFirstPlaying(): boolean {
    return this.currentFile.index === 0;
  }

  public isLastPlaying(): boolean {
    return this.currentFile.index === this.files.length - 1;
  }

  public next(): void {
    const index = this.currentFile.index + 1;
    this.router.navigate(['episode'], { queryParams: { url: this.currentPodcast.url, index: JSON.stringify(index) } });
  }

  public previous(): void {
    const index = this.currentFile.index - 1;
    this.router.navigate(['episode'], { queryParams: { url: this.currentPodcast.url, index: JSON.stringify(index) } });
  }

  public openFile(file: Episode, index: number): void {
    this.currentFile = { index, file };
    this.stop();
    this.loadAudio(file);
  }

  public onSliderChangeEnd(change: MatSliderChange): void {
    const value  = change.value || 0;
    this.seekTo(value);
  }

  private loadAudio(episode: Episode): void {
    if (!this.audio) {
      this.audio = new Audio();
    }

    this.audio.pause();
    this.audio.src = episode.downloaded ? URL.createObjectURL(episode.downloaded) : episode.enclosure.link;
    this.audio.load();
    this.audio.currentTime = episode.progress || 0;

    this.audio.oncanplay = () => {
      this.state.canplay = true;
    };

    this.audio.onloadedmetadata = () => {
      if (this.audio) {
        this.state.duration = this.audio.duration;
        this.state.readableDuration = this.formatTime(this.audio.duration);
        this.state.readableCurrentTime = this.formatTime(this.audio.currentTime);
      }
    };

    this.audio.ontimeupdate = () => {
      if (this.audio) {
        this.state.readableCurrentTime = this.formatTime(this.audio.currentTime);
        this.state.currentTime = this.audio.currentTime;
      }
    };

    this.audio.onplaying = () => {
      this.state.playing = true;
    };

    this.audio.onpause = () => {
      this.state.playing = false;
      this.stopProgress.next();
    };
  }

  public play(): void {
    if (this.audio) {
      this.audio.play();
      interval(60000).pipe(takeUntil(this.stopProgress)).subscribe(() => this.updateProgress());
    }
  }

  private updateProgress(): void {
    this.currentFile.file.progress = this.state.currentTime || 0;
    this.idb.updatePodcast(this.currentPodcast);
  }

  public pause(): void {
    if (this.audio) {
      this.audio.pause();
    }
  }

  public stop(): void {
    if (this.audio) { this.audio.pause(); }
    this.audio = null;
  }

  public seekTo(seconds: number): void {
    if (this.audio) { this.audio.currentTime = seconds; }
  }

  public formatTime(time: number): string {
    return new Date(time * 1000).toUTCString().slice(-13, -4);
  }

  private resetState(): void {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: 0,
      canplay: false,
      error: false,
    };
  }

}
