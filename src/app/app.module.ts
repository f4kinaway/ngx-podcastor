import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { PodcastEpisodeComponent } from './components/podcast/podcast-episode/podcast-episode.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { PodcastsCoverComponent } from './components/podcasts/podcasts-cover/podcasts-cover.component';
import { PlayerComponent } from './components/player/player.component';
import { DurationPipe } from './pipes/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    PodcastComponent,
    PodcastEpisodeComponent,
    PodcastsComponent,
    PodcastsCoverComponent,
    PlayerComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
