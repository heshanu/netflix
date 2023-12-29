import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieapiService } from '../../../service/movieapi.service';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  imports: [CommonModule],
  standalone: true
})
export class SearchComponent {
 constructor(private service:MovieapiService,private title:Title,private meta:Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
   }

  ngOnInit(): void {
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm()
  {
      console.log(this.searchForm.value,'searchform#');
      this.service.getSearchMovie(this.searchForm.value).subscribe((result:any)=>{
          console.log(result,'searchmovie##');
          this.searchResult = result.results;
      });
  }
}
