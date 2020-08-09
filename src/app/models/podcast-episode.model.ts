export interface PodcastEpisode {
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
}

export interface Enclosure {
  link: string;
  type: string;
  length: number;
  duration: number;
  thumbnail: string;
}

// export interface PodcastEpisode {
//   id: string;
//   link: string;
//   audio: string;
//   image: string;
//   title: string;
//   thumbnail: string;
//   description: string;
//   pub_date_ms: number;
//   listennotes_url: string;
//   audio_length_sec: number;
//   explicit_content: boolean;
//   maybe_audio_invalid: boolean;
//   listennotes_edit_url: string;
// }
