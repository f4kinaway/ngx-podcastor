import { Enclosure, PodcastEpisode } from './podcast-episode.model';

export class Episode {

  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: Enclosure;
  guid: string;
  link: string;
  pubDate: Date;
  thumbnail: string;
  title: string;
  completed: boolean;
  downloaded: Blob | null;
  progress: number;

  constructor(
    author: string,
    categories: string[],
    content: string,
    description: string,
    enclosure: Enclosure,
    guid: string,
    link: string,
    pubDate: Date,
    thumbnail: string,
    title: string,
    completed: boolean,
    downloaded: Blob | null,
    progress: number
  ) {
    this.author = author;
    this.categories = categories;
    this.content = content;
    this.description = description;
    this.enclosure = enclosure;
    this.guid = guid;
    this.link = link;
    this.pubDate = pubDate;
    this.thumbnail = thumbnail;
    this.title = title;
    this.completed = completed;
    this.downloaded = downloaded;
    this.progress = progress;
  }

  public static fromRSS(rss: PodcastEpisode): Episode {
    return {
      author: rss.author,
      categories: rss.categories,
      content: rss.content,
      description: rss.description,
      enclosure: rss.enclosure,
      guid: rss.guid,
      link: rss.link,
      pubDate: rss.pubDate,
      thumbnail: rss.thumbnail,
      title: rss.title,
      completed: false,
      downloaded: null,
      progress: 0
    };
  }
}
