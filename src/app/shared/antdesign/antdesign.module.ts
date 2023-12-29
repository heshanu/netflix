import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule
  ],
  exports: [
    NzLayoutModule,NzCarouselModule 
  ]
})
export class AntdesignModule { }
