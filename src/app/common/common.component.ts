import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../app-service.service';
import { DataSharingService } from '../data-sharing.service';
import { NavigatorService } from '../navigator.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

 isSubmitted?=false;
 data:Array<string> =[
  '28 November','kathmandu','10:20' 
 ];
  constructor(library: FaIconLibrary,private appService:AppService ,private navservice:NavigatorService ,private dataService:DataSharingService) {
    this.dataService.isSubmitted.subscribe( (value: boolean ) => {
      this.isSubmitted = value;
  });
    this.dataService.data.subscribe( (value: Array<string> ) => {
      this.data = value;
  });
  library.addIcons(faCalendar,faClock,faLocation);

    }


  ngOnInit(): void {
  }

  getlocation(){
    if(this.data[0])
    {
      return this.data[0];
    }
    return "Kathmandu";
  }
}
