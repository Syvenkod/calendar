import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';


@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent implements OnInit {
  appointmentData: Date;
  form: FormGroup;
  newAppointmentData: string;

  constructor(private service:CommonService,
  private appointForm: FormBuilder) {
    this.appointmentData = new Date();
    this.newAppointmentData = this.appointmentData.toISOString().substring(0, 16);
   }

ngOnInit() {
    this.form = this.appointForm.group({
      title: [null, [Validators.required]],
      time: [this.newAppointmentData],
      description: [""]
    })

  }
  onSubmit(form:any) {
    console.log(form.value);
    if(localStorage.getItem(form.value.time.substring(0, 10))){
      localStorage.setItem(form.value.time.substring(0, 10), localStorage.getItem(form.value.time.substring(0, 10)) + ', ' + JSON.stringify(form.value));
    }
    else{
      localStorage.setItem(form.value.time.substring(0, 10), JSON.stringify(form.value))
    }
    this.form.reset();
  }

}
