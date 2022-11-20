
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
    public isSubmitted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public data: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([
      
     ]);
}