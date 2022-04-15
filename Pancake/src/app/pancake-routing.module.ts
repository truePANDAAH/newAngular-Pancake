import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NftComponent } from './pages/nft/nft.component';

const routes: Routes = [
        { path: 'home', component: HomePageComponent },
        { path: 'nft', component: NftComponent },
        { path: '', component: HomePageComponent },
      ];

  @NgModule ({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })

  export class PancakeRoutingModule {}
