import { Component, AfterContentChecked } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/service/common.service';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterContentChecked  {
  clickedData: any | undefined;
  selected: Date = new Date();
  newAppointment = new Set<Appointment>();

  constructor(public dialog: MatDialog, private service:CommonService) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
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
