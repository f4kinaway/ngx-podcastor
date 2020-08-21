import Parser from 'rss-parser';

export class Episode {

  author: string;
  description: string;
  duration: string; // HH:mm:ss
  enclosure: Enclosure;
  link?: string;
  pubDate?: Date;
  thumbnail: string;
  title?: string;
  completed: boolean;
  downloaded: Blob | null;
  progress: number;

  constructor(
    author: string,
    description: string,
    duration: string,
    enclosure: Enclosure,
    link: string,
    pubDate: Date,
    thumbnail: string,
    title: string,
    completed: boolean,
    downloaded: Blob | null,
    progress: number
  ) {
    this.author = author;
    this.description = description;
    this.duration = duration;
    this.enclosure = enclosure;
    this.link = link;
    this.pubDate = pubDate;
    this.thumbnail = thumbnail;
    this.title = title;
    this.completed = completed;
    this.downloaded = downloaded;
    this.progress = progress;
  }

  public static fromRSS(rss: Parser.Item): Episode {
    return {
      author: rss.author,
      description: rss.itunes?.summary,
      duration: rss.itunes?.duration,
      enclosure: rss.enclosure || { url: '', type: '', length: 0 },
      link: rss.link,
      pubDate: rss.pubDate ? new Date(rss.pubDate) : undefined,
      thumbnail: rss.itunes?.image,
      title: rss.title,
      completed: false,
      downloaded: null,
      progress: 0
    };
  }
}

export interface Enclosure {
  url: string;
  type?: string;
  length?: number;
}
