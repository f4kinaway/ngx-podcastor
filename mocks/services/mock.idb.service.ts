import { Podcast } from '../../src/app/models/podcast.model';
import { MockPodcast } from '../models/mock.podcast.model';

export class MockIdbService {
  public async getPodcasts(): Promise<Podcast[]> { return Promise.resolve([]); }
  public async getPodcast(url: string): Promise<Podcast> { return Promise.resolve(MockPodcast); }
  public async addPodcast(podcast: Podcast): Promise<boolean> { return Promise.resolve(true); }
  public async updatePodcast(podcast: Podcast): Promise<boolean> {return Promise.resolve(true); }
  public async deletePodcast(url: string): Promise<boolean> {return Promise.resolve(true); }
  public async resetPodcasts(): Promise<boolean> { return Promise.resolve(true); }
}
