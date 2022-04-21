import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farm } from 'src/app/Models/Farm';
import { Syrup } from 'src/app/Models/Syrup';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  status: boolean = true;

  farms: Farm[] = [
    {
      title: 'GMI-BNB LP',
      price: 167.562,
      value: 'APR'
    },

    {
      title: 'BCOIN-BNB',
      price: 165.905,
      value: 'APR'
    },

    {
      title: 'FINA-BUSD LP',
      price: 163.100,
      value: 'APR'
    },

    {
      title: 'TINC-BNB LP',
      price: 153.890,
      value: 'APR'
    },

    {
      title: 'ERA-BNB LP',
      price: 143.363,
      value: 'APR'
    }
  ]

  syrups: Syrup[] = [
    {
      title: 'Stake CAKE - Earn GMI',
      price: 70.267,
      value: 'APR'
    },

    {
      title: 'Stake CAKE - Earn TINC',
      price: 69.876,
      value: 'APR'
    },

    {
      title: 'Stake CAKE - Earn ERA',
      price: 69.545,
      value: 'APR'
    },

    {
      title: 'Stake CAKE - Earn GMT',
      price: 69.326,
      value: 'APR'
    },

    {
      title: 'Stake CAKE - Earn DUET',
      price: 69.194,
      value: 'APR'
    }
  ]

  toggleDarkTheme(): void {
    document.body.classList.toggle("dark-theme");
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeBox() {
    if(this.farms) {
    this.farms
    } else {
      this.syrups
    }
  }

  

}
