import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntdesignModule } from './shared/antdesign/antdesign.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { MaterialdesignModule } from './shared/materialdesign/materialdesign.module';
import { NavigationComponent } from './shared/navbar/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './comp/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound/notfound.component';
import { SearchComponent } from './shared/navbar/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './pages/movieDetails/movie-details/movie-details.component';
import { MovieapiService } from './service/movieapi.service';
import {HttpClientModule } from '@angular/common/http';
import { CarouslComponent } from './shared/carousl/carousl.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent,
    SearchComponent,
    MovieDetailsComponent,
    CarouslComponent,   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AntdesignModule,
    NzBreadCrumbModule,
    MaterialdesignModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule
  ],
  providers: [
    provideClientHydration(),
    MovieapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
