import { Component, AfterContentChecked } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-daylist',
  templateUrl: './daylist.component.html',
  styleUrls: ['./daylist.component.scss']
})
export class DaylistComponent implements AfterContentChecked{
  selectedData: Date;

  constructor(private service:CommonService) { }

  ngAfterContentChecked(): void {
    this.service.clickedData$.subscribe((data) =>{
      this.selectedData = data;
    })
  }
}
