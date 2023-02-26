import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private clickedDataSubject = new Subject<any>();
  clickedData$ = this.clickedDataSubject.asObservable();
  constructor() { }

  clickedData(data: any) {
    this.clickedDataSubject.next(data);
  }
}
