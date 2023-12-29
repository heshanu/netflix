import { Component, ViewChild } from '@angular/core';
import { MovieapiService } from '../../service/movieapi.service';

@Component({
  selector: 'app-carousl',
  templateUrl: './carousl.component.html',
  styleUrl: './carousl.component.css'
})
export class CarouslComponent {

  movieList: any|null[] = [];
  constructor(private movieapiService:MovieapiService ) { 
    this.getMovieList();
  }

  getMovieList() {
    this.movieapiService.getBannerApiData().subscribe((data: any) => {
      this.movieList = data.results;
    });
   }

}
