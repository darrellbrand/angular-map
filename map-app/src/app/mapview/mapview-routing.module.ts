import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealmapComponent } from './realmap/realmap.component';
const routes: Routes = [{path: 'mapview', component: RealmapComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapviewRoutingModule { }
