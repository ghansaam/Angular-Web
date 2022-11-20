import { Component, OnInit } from '@angular/core';
import { DataSharingService } from './data-sharing.service';
import { NavigatorService } from './navigator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NavigatorService]
})
export class AppComponent implements OnInit {
  title = 'static-web';
  isSubmitted?:boolean ; 
  element:boolean = true; 
  edit: boolean=true;
  home: boolean=true;
  result: boolean =false;
   currentpage:string="home" ;

  constructor(private navServ :NavigatorService ,private dataService:DataSharingService) {
    this.dataService.isSubmitted.subscribe( (value: boolean ) => {
      this.isSubmitted = value;
    });

    }


  ngOnInit() {
    this.edit=this.navServ.edit;
    this.home=this.navServ.home;
    this.result=this.navServ.result;
    }
  decideComponenet() {
    this.dataService.isSubmitted.subscribe( (value: boolean ) => {
      this.isSubmitted = value;
    });
    return this.isSubmitted;
  }
  hideData() {
    return (this.element = false);
  }
 
}
