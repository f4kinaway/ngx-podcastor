import { Injectable } from '@angular/core';
import { openDB, DBSchema } from 'idb';

import { Podcast } from '../models/podcast.model';

interface NgxPodcastorDB extends DBSchema {
  podcasts: {
    value: Podcast;
    key: string;
    indexes: { 'titleIndex': string };
  };
}

@Injectable({
  providedIn: 'root'
})
export class IdbService {

  constructor() {
    this.initDB();
  }

  private initDB(): void {
    openDB<NgxPodcastorDB>('ngx-podcastor-db', 1, {
      upgrade(db): void {
        const podcastStore = db.createObjectStore('podcasts', { keyPath: 'url' });
        podcastStore.createIndex('titleIndex', 'title');
      },
    });
  }

  public async getPodcasts(): Promise<Podcast[]> {
    const db = await openDB('ngx-podcastor-db', 1);
    const podcasts = await db.getAllFromIndex('podcasts', 'titleIndex');
    db.close();
    return podcasts;
  }

  public async getPodcast(url: string): Promise<Podcast> {
    const db = await openDB('ngx-podcastor-db', 1);
    const podcast = await db.get('podcasts', url);
    db.close();
    return podcast;
  }

  public async addPodcast(podcast: Podcast): Promise<boolean> {
    const db = await openDB('ngx-podcastor-db', 1);
    db.add('podcasts', podcast);
    db.close();
    return true;
  }

  public async updatePodcast(podcast: Podcast): Promise<boolean> {
    const db = await openDB('ngx-podcastor-db', 1);
    db.put('podcasts', podcast);
    db.close();
    return true;
  }

  public async deletePodcast(url: string): Promise<boolean> {
    const db = await openDB('ngx-podcastor-db', 1);
    db.delete('podcasts', url);
    db.close();
    return true;
  }

  public async resetPodcasts(): Promise<boolean> {
    const db = await openDB('ngx-podcastor-db', 1);
    db.clear('podcasts');
    db.close();
    return true;
  }
}
