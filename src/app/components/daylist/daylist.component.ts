import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-daylist',
  templateUrl: './daylist.component.html',
  styleUrls: ['./daylist.component.scss']
})
export class DaylistComponent implements OnInit, AfterContentChecked {
  selectedData: Date = new Date;
  tasks: any | undefined;
  hours: any | undefined;

  constructor(private service:CommonService) { }

  ngOnInit(): void {
    // this.service.getTasks().subscribe((data) =>{
    //   this.tasks = data;})
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

}
