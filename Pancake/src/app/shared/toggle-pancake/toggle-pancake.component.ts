import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-toggle-pancake',
  templateUrl: './toggle-pancake.component.html',
  styleUrls: ['./toggle-pancake.component.css']
})
export class TogglePancakeComponent implements OnInit {
  status:boolean= true;

  constructor() { }

  ngOnInit(): void {
  }

//   clickEvent(){
//     this.status = !this.status;       
// }

}
