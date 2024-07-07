import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from '../search-item/search-item.component';
import { SearchItem } from '../search-item.model';
import { SearchResults } from '../search-results.model';
import { YouTubeService } from '../youtube.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchItemComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
  searchResults: SearchResults | undefined;
  youTubeService: YouTubeService = inject(YouTubeService);

  constructor() {
    this.youTubeService.getVideos().then(
      (searchResults : SearchResults) => {
        this.searchResults = searchResults;
      }
    )
  }
}
