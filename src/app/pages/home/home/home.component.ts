import { Component } from '@angular/core';
import { MovieapiService } from '../../../service/movieapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
movieList: any[] = [];
  constructor(private movieapi: MovieapiService) {

  }

  
}
