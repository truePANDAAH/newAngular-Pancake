import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
status: boolean = true;

  toggleDarkTheme(): void {
    document.body.classList.toggle("dark-theme");
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
