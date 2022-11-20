import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { EventInfo } from './user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:8080/api';
 


  getData() {

    return this.http.get(this.rootURL + '/events',) 
 
  }

  
 

postIt(data:any) {
  const url = this.rootURL+'/events';
  // const body = JSON.stringify({location: locatio,
  //                              date: dat});
  const body = data;
  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
  this.http.post(url, body, {headers: headers}).subscribe(
      (data) => {
          console.log(data);
      },
      (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
              console.error('Client-side error occured.');
          } else {
              console.error('Server-side error occured.');
          }
      }
  );
}
  // example(){
 
  //   this.http.post<any>('https://reqres.in/api/users', { job: 'Angular POST Request Example',name:"gb" }).subscribe({
  //       next: data => {
  //           console.log(data);
  //       },
  //       error: error => {
  //           this.errorMessage = error.message;
  //           console.error('There was an error!', this.errorMessage);
  //       }
  //   })
  // }

}

