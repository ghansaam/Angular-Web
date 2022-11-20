import { Component, OnInit,OnDestroy } from '@angular/core';
import { NavigatorService } from '../navigator.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AppService } from '../app-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DataSharingService } from '../data-sharing.service';
import { EventInfo } from '../user';



@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
  providers:[NavigatorService,AppService]
})
export class EditPageComponent implements OnInit {
  

  public currentpage="edit";
  isSubmitted?:boolean;
  data?:Array<string>;
  postData?:any;
;
  selectedPeoples!: number;
  selectedLocation!: number;
show =true;

  constructor(private appService:AppService ,private navservice:NavigatorService ,private dataService:DataSharingService) {
    this.dataService.isSubmitted.subscribe( (value: boolean ) => {
      this.isSubmitted = value;
  });
    this.dataService.data.subscribe( (value: Array<string> ) => {
      this.data = value;
  });
    }


  title = 'Angular-example';

  locations = [
    {locationId:0,locationIdName:'Bhaktapur'},
    {locationId:1,locationIdName:'Kathmandu'},
    {locationId:2,locationIdName:'Lalitpur'},
  ]

  peoples = [
    {userId:1,userCount:'1'},
    {userId:2,userCount:'2'},
    {userId:3,userCount:'3'},
    {userId:4,userCount:'4'},
    {userId:5,userCount:'5'},
    {userId:6,userCount:'6'},
    {userId:7,userCount:'7'},
    {userId:8,userCount:'8'},
  ]

 

  bindUserToProject() {
    this.dataService.isSubmitted.next(true);
    this.dataService.data.next([ this.locations[ this.selectedLocation].locationIdName, this.peoples[ this.selectedPeoples-1].userCount]);
    console.log( this.locations[ this.selectedLocation].locationIdName, this.peoples[ this.selectedPeoples-1].userCount);
    let loc=this.locations[ this.selectedLocation].locationIdName;
    let ppl=this.peoples[ this.selectedPeoples-1].userCount;
    this.data=this.dataService.data.value;
    this.postData={
      "location":loc,
      "time":"10:40",
      "date":"28 November",
      "peoples":ppl,
      

    };
    console.log("final dta:",this.postData);
    this.onSubmit();
 
  }

  userForm = new FormGroup({
    location: new FormControl('',  Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('',  Validators.required)
  });

  users: any = [];


  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    console.log("submit info..");
    

    // this.appService.sendData(this.postData).pipe(takeUntil(this.destroy$)).subscribe(response=> {
    //   console.log('message::::', response);

  
    //   this.userForm.reset();
    // });
    this.appService.postIt(this.postData);
    this.userForm.reset();
  }

  getData() {
    this.appService.getData().pipe(takeUntil(this.destroy$)).subscribe((users: any) => {
        this.users = users;
       
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  ngOnInit() {
    
   this.getData();

  }
  decideComponent() {
    // Some code 
    // .....
    // After the user has logged in, emit the behavior subject changes.
    this.dataService.isSubmitted.next(true);
}
  // hideComponent() {
  //   this.show = false;
  //   this.navServ.hideEditPage();
  //   this.navServ.showResultPage();
  //   console.log("triggered");

  // }

  

}
// export interface SelectedUser {
//   selectedUser: string;
  
// }
// interface selectedProject{
//   selectedProject : number ;
// }

