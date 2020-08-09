import { PodcastEpisode } from './podcast-episode.model';

export class PodcastFeed {
  feed: {
    author: string;
    description: string;
    image: string;
    link: string;
    title: string;
    url: string;
  };
  items: PodcastEpisode[];

  constructor(response: PodcastFeed) {
    this.feed = response.feed;
    this.items = response.items;
  }
}

// export interface PodcastFeed {
//   id: string;
//   // rss: string;
//   type: string;
//   // email: string;
//   // extra: any;
//   // image: string;
//   title: string;
//   country: string;
//   website: string;
//   episodes: PodcastEpisode[];
//   language: string;
//   genre_ids: number[];
//   itunes_id: number;
//   publisher: string;
//   thumbnail: string;
//   is_claimed: boolean;
//   description: string;
//   // looking_for: any;
//   total_episodes: number;
//   listennotes_url: string;
//   explicit_content: boolean;
//   latest_pub_date_ms: number;
//   earliest_pub_date_ms: number;
//   next_episode_pub_date: number;
// }
