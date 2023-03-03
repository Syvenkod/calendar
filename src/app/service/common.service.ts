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

  getTasks(){
  return this.http.get('api/tasks')
  }

  addTask(task: any){
    return this.http.post('api/tasks',
     {id: task.id,
      title: task.title,
      time: task.time,
      description: task.description})
    }

  editTask(task: any){
      return this.http.put(`api/tasks/${task.id}`, task)
    }

  deleteTask(id:number){
      return this.http.delete(`api/tasks/${id}`)
    }
}
