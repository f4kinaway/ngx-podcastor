import { Component } from '@angular/core';

import { SearchResults } from 'src/app/models/search-results.model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public term!: string;
  public results!: SearchResults;

  constructor(private search: SearchService) { }

  public submitSearch(): void {
    this.search.searchPodcast(this.term).subscribe(res => this.results = res);
   }

}
