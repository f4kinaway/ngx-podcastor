import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PodcastEpisodeComponent } from './podcast-episode.component';
import { PodcastService } from 'src/app/services/podcast.service';
import { MockPodcastService } from '../../../../../mocks/services/mock.podcast.service';
import { MockRouter } from 'mocks/services/mock.router.service';
import { DurationPipe } from '../../../pipes/duration.pipe';

describe('PodcastEpisodeComponent', () => {
  let component: PodcastEpisodeComponent;
  let fixture: ComponentFixture<PodcastEpisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatMenuModule, MatProgressBarModule, MatCardModule, MatButtonModule, MatIconModule ],
      declarations: [ PodcastEpisodeComponent, DurationPipe ],
      providers: [
        { provide: PodcastService, useClass: MockPodcastService },
        { provide: Router, useClass: MockRouter },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
