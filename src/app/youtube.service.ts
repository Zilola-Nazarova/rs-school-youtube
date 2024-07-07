import { Injectable } from '@angular/core';

import { SearchResults } from './search-results.model';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {
  url = 'http://localhost:3000/response';
  async getVideos() : Promise<SearchResults> {
    const data = await fetch(`${this.url}`);
    return await data.json() ?? {};
  }
}
