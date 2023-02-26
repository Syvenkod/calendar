import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  selected: Date | null;
  constructor(public dialog: MatDialog) { }

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
}
