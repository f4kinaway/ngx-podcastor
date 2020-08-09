import { SearchEntry } from './search-entry.model';

export interface SearchResults {
  readonly resultCount: number;
  readonly results: SearchEntry[];
}

// export interface SearchResults {
//   readonly took: number;
//   readonly count: number;
//   readonly total: number;
//   readonly results: SearchEntry[];
//   readonly next_offset: number;
// }
