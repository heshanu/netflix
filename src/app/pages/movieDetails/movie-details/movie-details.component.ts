import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MovieapiService } from '../../../service/movieapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  selectedMovieList: any;
    
  constructor(private movieApi: MovieapiService,private router:ActivatedRoute) {}
  ngOnInit(): void {
    let getParamId=this.router.snapshot.paramMap.get('id');
    this.getMovieList(getParamId);
  }
  
  public getMovieList(id: any) { 
    this.movieApi.getMovieDetails(id).subscribe((data: any) => {
      this.selectedMovieList = data;
      // this.selectedMovieList = data[0];
      //  console.log(this.selectedMovieList); 
    });
  //   console.log(``,this.selectedMovieList);
  }
  

}
