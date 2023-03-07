import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';


@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {
  taskData: Date;
  form: FormGroup;
  newTaskData: string;

  constructor(private service:CommonService,
  private appointForm: FormBuilder) {
    this.taskData = new Date();
    this.newTaskData = this.taskData.toISOString().substring(0, 16);
   }

ngOnInit() {
    this.form = this.appointForm.group({
      title: [null, [Validators.required]],
      time: [this.newTaskData],
      description: [""]
    })

  }
  onSubmit(form:any) {
    console.log(form.value);
    this.service.addTask(form.value).subscribe((data)=>{
      console.log(data);
    })
    this.form.reset();
  }

}
