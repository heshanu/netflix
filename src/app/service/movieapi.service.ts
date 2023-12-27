import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {
  baseUrl: string = "https://api.themoviedb.org/3/movie/";
  apiKey: string = "f01e965a09bb713943d133560178a7e2";
  bannerApi = `${ this.baseUrl } popular ? api_key = ${ this.apiKey}`;
  
  constructor(private http:HttpClient) { }
}
