import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private clickedDataSubject = new Subject<any>();
  clickedData$ = this.clickedDataSubject.asObservable();
  private newAppointmentSubject = new Subject<any>();
  newAppointment$ = this.newAppointmentSubject.asObservable();

  constructor() { }

  clickedData(data: any) {
    this.clickedDataSubject.next(data);
  }

  newAppointment(data: any){
    this.newAppointmentSubject.next(data);
  }

}
