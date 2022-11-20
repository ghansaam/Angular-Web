import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class NavigatorService {
  page: string="home";
  edit: boolean=true;
  home: boolean=true;
  result: boolean =false;
  constructor() { }

  // get currentPage(): string {
  //   return this.page;

  // }
  // set currentPage(value: string) {
  //     this.page = value;
  // }

  showResultPage() {
    this.result=true;
    return this.result;
  }
  hideResultPage() {
    this.result=false;

    return (this.result = false);
  }
  showEditPage() {
    this.edit = true
    return (this.edit = true);
  }
  hideEditPage() {
    this.edit = false
    return (this.edit = false);
  }
  hideHomePage() {
    this.home = true;
    return (this.home = true);
  }
 showHomePage() {
  this.home = false;
    return (this.home = false);
  }
}


export interface Page {
  pages: string;
  
}
export enum Pages {
  home, 
  edit, 
  result, 
  
}
