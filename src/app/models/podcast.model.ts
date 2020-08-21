import { Episode } from './episode.model';
import Parser from 'rss-parser';

export class Podcast {

  author: string;
  description?: string;
  image: string;
  link?: string;
  title?: string;
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

  public static fromRSS(rss: Parser.Output, feedUrl: string): Podcast {
    return {
      author: rss.author || rss.itunes?.author,
      description: rss.description,
      image: rss.image?.url ? rss.image?.url : rss.itunes?.image || '',
      link: rss.link ,
      title: rss.title,
      url: feedUrl,
      episodes: rss.items ? rss.items.map(item => Episode.fromRSS(item)) : [],
      subscribed: false
    };
  }
}
