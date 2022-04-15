import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NftComponent } from './pages/nft/nft.component';

const routes: Routes = [
        { path: 'home', component: HomePageComponent },
        { path: 'nft', component: NftComponent },
        { path: 'design', component: DesignSystemComponent },
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
