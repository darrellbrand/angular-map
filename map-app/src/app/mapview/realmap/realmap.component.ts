import { Component,EventEmitter,OnDestroy } from '@angular/core';
import { MapserviceService } from 'src/app/mapservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-realmap',
  templateUrl: './realmap.component.html',
  styleUrls: ['./realmap.component.css']
})
export class RealmapComponent {

  country = [];
  constructor(private mapservice: MapserviceService){}
  countryName = "";
  countryProperties: any = null;

 
  pathClicked = new EventEmitter<string>();
  pathMouseOver = new EventEmitter<string>();
  pathMouseOut = new EventEmitter<string>();
  onPathClick(event: MouseEvent, pathId: string) {
    this.pathClicked.emit(pathId);
   
  }

  onPathMouseOver(event: MouseEvent, pathId: string) {
    this.pathMouseOver.emit(pathId);
      this.countryName = pathId;
      this.getCountryProperties();
  }

  onPathMouseOut(event: MouseEvent, pathId: string) {
    this.pathMouseOut.emit(pathId);
   
  }
  
  setCountryProperties(data: any){
    this.countryProperties = data[1][0];
  }
  getCountryProperties() {
    this.mapservice.getCountryProperties(this.countryName).subscribe(
      (data: any) => {
       this.setCountryProperties(data);
      }
    );
  }
}


