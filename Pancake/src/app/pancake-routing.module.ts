import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { FarmsComponent } from './pages/Earns/farms/farms.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NftOverviewComponent } from './pages/nft-overview/nft-overview.component';
import { NftComponent } from './pages/nft/nft.component';

const routes: Routes = [
        { path: 'home', component: HomePageComponent },
        { path: 'nft', component: NftComponent },
        { path: 'overview', component: NftOverviewComponent },
        { path: 'farms', component: FarmsComponent },
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
