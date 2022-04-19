import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode-btn',
  templateUrl: './darkmode-btn.component.html',
  styleUrls: ['./darkmode-btn.component.css']
})
export class DarkmodeBtnComponent implements OnInit {
   toggleDarkTheme(): void {
    document.body.classList.toggle("dark-theme");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
