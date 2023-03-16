import { Hour } from './../models/hours';
import { Component, AfterContentChecked, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { Task } from '../models/task';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-daylist',
  templateUrl: './daylist.component.html',
  styleUrls: ['./daylist.component.scss']
})
export class DaylistComponent implements OnInit, AfterContentChecked, OnDestroy {
  selectedData: Date = new Date;
  tasks: any | undefined;
  hours: any | undefined;
  private clickedDataSubscription: Subscription;
  displayedColumns: string[] = ['hour','task'];
  dataSource: any;
  @ViewChild('table') table: MatTable<Hour>;

  constructor(private service:CommonService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe((data) =>{
      this.tasks = data;})
    this.service.getHours().subscribe((data) =>{
      this.hours = data;})
    }

  ngOnDestroy(): void {
      if (this.clickedDataSubscription) {
        this.clickedDataSubscription.unsubscribe();
      }
    }

  deleteApp(id:number){
    this.service.deleteTask(id).subscribe(del =>{
      this.service.getTasks().subscribe((data) =>{
        this.tasks = data;})
    });
  }

  ngAfterContentChecked(): void {
    this.clickedDataSubscription = this.service.clickedData$.subscribe((data) =>{
      this.selectedData = data.toISOString().substring(0, 10);
    });
    this.service.getTasks().subscribe((data) =>{
      this.tasks = data;
  })
  }

  public trackById(task: any): number {
    return task.id;
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.hours, event.previousIndex, event.currentIndex);
    this.hours.forEach((hour: { id: any; }, id: number) => {
      hour.id = id + 1;
    });
    this.table.renderRows();
  }

}
