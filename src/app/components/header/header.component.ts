import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  collapsed: boolean = false;

  @Output() onCollapsed = new EventEmitter<boolean>()
  change(event:any){
    this.collapsed = !this.collapsed;
    this.onCollapsed.emit(event);
  }
}
