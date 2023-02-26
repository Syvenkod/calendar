import { Component, Output, EventEmitter, AfterContentChecked, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  collapsed: boolean = false;
  choiseDate: Date;

  constructor(private service:CommonService) { }
  @Output() onCollapsed = new EventEmitter<boolean>()
  change(event:any){
    this.collapsed = !this.collapsed;
    this.onCollapsed.emit(event);
  }

  ngOnInit(): void {
  }

   ngAfterContentChecked(): void {
    this.service.clickedData$.subscribe((data) =>{
      this.choiseDate = data;
    })
  }

}
