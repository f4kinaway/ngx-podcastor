import { Observable, of } from 'rxjs';

import { MockSearchResult } from '../models/mock.search-results.model';
import { SearchResults } from '../../src/app/models/search-results.model';

export class MockSearchService {
  public searchPodcast(term: string): Observable<SearchResults> { return of(MockSearchResult); }
}
