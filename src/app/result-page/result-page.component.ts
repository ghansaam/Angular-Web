import { Component, OnInit } from '@angular/core';
import{Router, Routes} from '@angular/router';
import { DataSharingService } from '../data-sharing.service';
import { NavigatorService } from '../navigator.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
  providers:[NavigatorService],
})
export class ResultPageComponent implements OnInit {

  public currentpage="result";
  public element:boolean = true;
  show:boolean =true;
  data:Array<string> = [];

  constructor(private navServ :NavigatorService ,private dataShare:DataSharingService ,private router: Router) {
    this.dataShare.data.subscribe( (value: Array<string> ) => {
      this.data = value;  });
    }


 
  ngOnInit() {

   console.log("Datas:", this.data);

}
navigate(){
  this.dataShare.isSubmitted.next(false);
  this.router.navigate(['/']);
}
onClickMe(event?: MouseEvent) {
  const evtMsg = event ? ' Event target class is ' + (event.target as HTMLElement).className  : '';
  alert('Click me.' + evtMsg);
}
hideComponent() {
  console.log("go BVakc");
  this.dataShare.isSubmitted.next(false);
 

}
showData() {
  return (this.element = true);
}
hideData() {
  return (this.element = false);
}
}