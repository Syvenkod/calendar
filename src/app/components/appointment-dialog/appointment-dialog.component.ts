import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent implements OnInit {
  constructor(private service:CommonService,
    private appointForm: FormBuilder) { }
  appointmentData: Date = new Date();
  form: FormGroup;

ngOnInit() {
    this.form = this.appointForm.group({
      title: [null, [Validators.required]],
      // time: [null],
      description: [""]
    })
  }
  onSubmit(form:any) {
    console.log(form.value);
    this.form.reset();
  }
}
