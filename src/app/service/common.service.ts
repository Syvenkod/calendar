import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private clickedDataSubject = new Subject<any>();
  clickedData$ = this.clickedDataSubject.asObservable();

  constructor(private http: HttpClient) { }

  clickedData(data: any) {
    this.clickedDataSubject.next(data);
  }

  getAppointments(){
  return this.http.get('api/appointments')
  }

  addAppointments(appointment: any){
    return this.http.post('api/appointments',
     {id: appointment.id,
      title: appointment.title,
      time: appointment.time,
      description: appointment.description})
    }

  editAppointment(appointment: any){
      return this.http.put(`api/appointments/${appointment.id}`, appointment)
    }

  deleteAppointment(id:number){
      return this.http.delete(`api/appointments/${id}`)
    }
}
