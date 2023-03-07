import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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
  .pipe(catchError(this.handleError));
  }

  addTask(task: any){
    return this.http.post('api/tasks',
     {id: task.id,
      title: task.title,
      date: task.time.substring(0, 10),
      hour: task.time.substring(10, 13),
      minute: task.time.substring(13, 16),
      description: task.description})
      .pipe(catchError(this.handleError));
    }

  editTask(task: any){
      return this.http.put(`api/tasks/${task.id}`, task)
      .pipe(catchError(this.handleError));
    }

  deleteTask(id:number){
      return this.http.delete(`api/tasks/${id}`)
      .pipe(catchError(this.handleError));
    }

  getHours(){
      return this.http.get('api/hours')
      .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        console.error('An error occurred:', error.error);
      } else {
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }

      return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}
