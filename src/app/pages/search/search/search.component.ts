import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieapiService } from '../../../service/movieapi.service';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NzListModule } from 'ng-zorro-antd/list';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  imports: [CommonModule,ReactiveFormsModule ],
  standalone: true
})
export class SearchComponent {
 movieName!:any;
 constructor(private service:MovieapiService,private title:Title,private meta:Meta,private fb: FormBuilder,private router:Router) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
   }

  searchResult: any;

  selectedFilm: any[] = [];
  selectedM: any;
  
  searchForm = this.fb.group({
    movieName: new FormControl()
  });

  public submitForm():void
  {
    if (this.searchForm.valid) {
      
    // console.log('this is valid form');
     this.movieName = this.searchForm.value.movieName;
      //alert(this.movieName);
      this.getSearchMovie(); 
    }
    else{
      alert('please enter movie name');
    }
    this.searchForm.reset();
  }

  public getSearchMovie():void {
    const searchR = this.service.getSearchMovie(this.movieName).subscribe((res: any) => {
      this.searchResult = res.results;
      console.log(this.searchResult);
    });
    
  };
  
  public showMovieDetails(id: any) { 
   // alert(id);
    this.router.navigate(['/movieDetails',this.searchResult[0].id]);
  }
}
