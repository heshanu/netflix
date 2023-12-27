import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './comp/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
