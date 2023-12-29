import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import {    NzAlertModule } from 'ng-zorro-antd/alert';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule
  ],
  exports: [
    NzLayoutModule, NzCarouselModule, NzCardModule,
    NzListModule, NzGridModule, NzAvatarModule, NzSpinModule,
    NzAlertModule
  ]
})
export class AntdesignModule { }
