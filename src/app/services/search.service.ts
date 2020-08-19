import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SearchResults } from '../models/search-results.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public searchPodcast(term: string): Observable<SearchResults> {
    return this.http.get<SearchResults>('https://itunes.apple.com/search?entity=podcast&term=' + term);
  }

}
