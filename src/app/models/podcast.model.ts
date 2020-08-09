import { Episode } from './episode.model';
import { PodcastFeed } from './podcast-feed.model';

export class Podcast {

  author: string;
  description: string;
  image: string;
  link: string;
  title: string;
  url: string;
  episodes: Episode[];
  subscribed: boolean;

  constructor(
    author: string,
    description: string,
    image: string,
    link: string,
    title: string,
    url: string,
    episodes: Episode[],
    subscribed: boolean
  ) {
    this.author = author;
    this.description = description;
    this.image = image;
    this.link = link;
    this.title = title;
    this.url = url;
    this.episodes = episodes;
    this.subscribed = subscribed;
  }

  public static fromRSS(rss: PodcastFeed): Podcast {
    return {
      author: rss.feed.author,
      description: rss.feed.description,
      image: rss.feed.image,
      link: rss.feed.link,
      title: rss.feed.title,
      url: rss.feed.url,
      episodes: rss.items.map(item => Episode.fromRSS(item)),
      subscribed: false
    };
  }
}
