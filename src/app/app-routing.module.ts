import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'podcasts', component: PodcastsComponent },
  { path: 'episode', component: PlayerComponent },
  { path: '', pathMatch: 'full', redirectTo: '/podcasts'},
  { path: '**', redirectTo: '/podcasts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
