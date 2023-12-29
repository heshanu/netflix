import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieapiService {
  baseUrl: string = "https://api.themoviedb.org/3";
  apiKey: string = "f01e965a09bb713943d133560178a7e2";
  
  bannerApi = `${ this.baseUrl}/trending/all/week?api_key=${this.apiKey}`;
  
  constructor(private http: HttpClient) { }
  
  public getBannerApiData(): Observable<any> {
    console.log(`endpoint`,this.bannerApi);
    return this.http.get(this.bannerApi);
  }

}
