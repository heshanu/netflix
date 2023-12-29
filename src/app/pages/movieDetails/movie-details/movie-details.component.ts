import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MovieapiService } from '../../../service/movieapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  selectedMovieList!: any;
  selectedMovieVideo!: any;  
  selectedMovieCast!: any;

  constructor(private movieApi: MovieapiService,private router:ActivatedRoute) {}
  ngOnInit(): void {
    let getParamId=this.router.snapshot.paramMap.get('id');
    this.getMovieList(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }
  
  public getMovieList(id: any) { 
    this.movieApi.getMovieDetails(id).subscribe((data: any) => {
      this.selectedMovieList = data;
      // this.selectedMovieList = data[0];
      //  console.log(this.selectedMovieList); 
    });
  //   console.log(``,this.selectedMovieList);
  }
  
  public getVideo(id: any) { 
    this.movieApi.getMovieVideo(id).subscribe((data: any) => {
      this.selectedMovieVideo = data;
      this.selectedMovieVideo.results.forEach((element: any) => {
        if (element.type === 'Trailer') { 
          this.selectedMovieVideo = element.key;
        }
       })
      // this.selectedMovieList = data[0];
      //  console.log(this.selectedMovieList); 
    });
  }

  public getMovieCast(id: any) { 
    this.movieApi.getMovieCast(id).subscribe((data: any) => {
      this.selectedMovieCast = data;
      // this.selectedMovieList = data[0];
      //  console.log(this.selectedMovieList); 
    });
  }

}
