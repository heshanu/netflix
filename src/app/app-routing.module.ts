import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './comp/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound/notfound.component';
import { MovieDetailsComponent } from './pages/movieDetails/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search/search.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movieDetails/:id', component:MovieDetailsComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
