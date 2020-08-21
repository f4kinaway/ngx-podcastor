import { Podcast } from '../../src/app/models/podcast.model';
import { Episode } from 'src/app/models/episode.model';

export const MockPodcast = new Podcast('', '', '', '', '', '', [
  new Episode('', '', '', {
    url: '',
    type: '',
    length: 100
  }, '', new Date(), '', '', false, null, 0)
], false);
