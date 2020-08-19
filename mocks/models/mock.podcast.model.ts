import { Podcast } from '../../src/app/models/podcast.model';
import { Episode } from 'src/app/models/episode.model';

export const MockPodcast = new Podcast('', '', '', '', '', '', [
  new Episode('', [], '', '', {
    link: '', type: '',
    length: 100,
    duration: 100,
    thumbnail: ''
  }, '', '', new Date(), '', '', false, null, 0)
], false);
