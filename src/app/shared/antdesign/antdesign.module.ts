import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule
  ],
  exports: [
    NzLayoutModule, NzCarouselModule, NzCardModule,
    NzListModule,NzGridModule,NzAvatarModule
  ]
})
export class AntdesignModule { }
