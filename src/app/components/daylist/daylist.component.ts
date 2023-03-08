import { Component, AfterContentChecked, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Task } from '../models/task';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-daylist',
  templateUrl: './daylist.component.html',
  styleUrls: ['./daylist.component.scss']
})
export class DaylistComponent implements OnInit, AfterContentChecked {
  selectedData: Date = new Date;
  tasks: any;
  hours: any | undefined;

  constructor(private service:CommonService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe((data) =>{
      this.tasks = data;})
    this.service.getHours().subscribe((data) =>{
      this.hours = data;})
    }

  deleteApp(id:number){
    this.service.deleteTask(id).subscribe(del =>{
      this.service.getTasks().subscribe((data) =>{
        this.tasks = data;})
    });
  }

  ngAfterContentChecked(): void {
    this.service.clickedData$.subscribe((data) =>{
      this.selectedData = data.toISOString().substring(0, 10);
    })
    this.service.getTasks().subscribe((data) =>{
      this.tasks = data;
  })

  }

  public trackById(task: any): string {
    return task.id;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  displayedColumns: string[] = ['hour', 'task'];
  dataSource: any;
  @ViewChild('table') table: MatTable<Task>;

  dropTable(event: CdkDragDrop<Task[]>) {
    const prevIndex = this.dataSource.findIndex((d:any) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
  }

}
