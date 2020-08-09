export interface SearchEntry {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl600: string;
  collectionPrice: number;
  trackPrice: number;
  trackRentalPrice: number;
  collectionHdPrice: number;
  trackHdPrice: number;
  trackHdRentalPrice: number;
  releaseDate: string; // Date
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  genreIds: string[];
  genres: string[];
}

// export interface SearchEntry {
//   id: string;
//   // rss: string;
//   // email: string;
//   // image: string;
//   website: string;
//   genre_ids: number[];
//   itunes_id: number;
//   thumbnail: string;
//   title_original: string;
//   total_episodes: number;
//   listennotes_url: string;
//   explicit_content: boolean;
//   title_highlighted: string;
//   latest_pub_date_ms: number;
//   publisher_original: string;
//   description_original: string;
//   earliest_pub_date_ms: number;
//   publisher_highlighted: string;
//   description_highlighted: string;
// }
