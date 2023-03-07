import { Component, AfterContentChecked } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/service/common.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterContentChecked  {
  clickedData: Date;
  selected: Date = new Date();

  constructor(public dialog: MatDialog, private service:CommonService) {

   }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
       width: '30%',
       enterAnimationDuration,
       exitAnimationDuration,
       data: {name: this.selected}
     });
     dialogRef.afterClosed().subscribe(result =>{

     })
   }
   ngAfterContentChecked():void{
    this.clickedData = this.selected;
    this.service.clickedData(this.clickedData);
   }
}
