import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent {
  constructor(private service:CommonService) { }
  appointmentData: Date = new Date();
  form: FormGroup;

}
