import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapviewRoutingModule } from './mapview-routing.module';
import { RealmapComponent } from './realmap/realmap.component';


@NgModule({
  declarations: [
    RealmapComponent
  ],
  imports: [
    CommonModule,
    MapviewRoutingModule
  ]
})
export class MapviewModule { }
