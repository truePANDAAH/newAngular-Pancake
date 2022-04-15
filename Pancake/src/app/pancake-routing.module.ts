import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NftComponent } from './pages/nft/nft.component';

const routes: Routes = [
    { path: '',
      component: NavBarComponent,
      children: [
        { path: '/home', component: HomePageComponent },
        { path: '/nft', component: NftComponent },
        { path: '', component: HomePageComponent },
      ]
    }
  ];

  @NgModule ({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

  export class PancakeRoutingModule {}
