import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MovieapiService } from '../../../service/movieapi.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent{
  movieList: any[] = [];
    
  constructor(private movieApi: MovieapiService) { 
    this.getMovieList();
  }
  

  public getMovieList() { 
    this.movieApi.getBannerApiData().subscribe((data: any) => {
      this.movieList = data.results;
      //console.log(this.movieList[0].id);
      //localStorage.setItem('movieList', JSON.stringify(this.movieList));
    });
  }

}
