import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-daylist-appointment',
  templateUrl: './daylist-appointment.component.html',
  styleUrls: ['./daylist-appointment.component.scss']
})
export class DaylistAppointmentComponent implements OnInit, AfterContentChecked {
  selectedData: Date = new Date;
  appointments: any | undefined;
  hours = ['1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm', '12 am'];

  constructor(private service:CommonService) { }

  ngOnInit(): void {
    // this.service.clickedData$.subscribe((data) =>{
    //   this.selectedData = data;
    // })

  }

  ngAfterContentChecked(): void {
    this.service.clickedData$.subscribe((data) =>{
      this.selectedData = data;
    })
    this.service.getAppointments().subscribe((data) =>{
      this.appointments = data;
  })

  }
}
