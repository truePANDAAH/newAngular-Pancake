import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { FaqComponent } from './shared/faq/faq.component';
import { FaqRowComponent } from './shared/faq-row/faq-row.component';
import { LanguageSelectorComponent } from './shared/language-selector/language-selector.component';
import { ModalConnectWalletComponent } from './shared/modal-connect-wallet/modal-connect-wallet.component';
import { ModalSettingComponent } from './shared/modal-setting/modal-setting.component';
import { TableBaseComponent } from './shared/table-base/table-base.component';
import { TableBaseRowComponent } from './shared/table-base-row/table-base-row.component';
import { TableBaseTitleComponent } from './shared/table-base-title/table-base-title.component';
import { CarouselComponent } from './pages/design-system/carousel/carousel.component';
import { IconsComponent } from './pages/design-system/icons/icons.component';
import { CopyButtonComponent } from './pages/design-system/copy-button/copy-button.component';
import { LogosAccordionComponent } from './pages/design-system/logos-accordion/logos-accordion.component';
import { CollapseForButtonsComponent } from './pages/design-system/collapse-for-buttons/collapse-for-buttons.component';
import { FooterComponent } from './core/footer/footer.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { NftComponent } from './pages/nft/nft.component';
import { ToggleSwitchComponent } from './shared/toggle-switch/toggle-switch.component';
import { TogglePancakeComponent } from './shared/toggle-pancake/toggle-pancake.component';
import { DarkmodeBtnComponent } from './shared/darkmode-btn/darkmode-btn.component';
import { HttpClientModule } from '@angular/common/http'
import { PancakeRoutingModule } from './pancake-routing.module';
import { NftOverviewComponent } from './pages/nft-overview/nft-overview.component';
import { FarmsComponent } from './pages/Earns/farms/farms.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignSystemComponent,
    NavBarComponent,
    FaqComponent,
    FaqRowComponent,
    LanguageSelectorComponent,
    ModalConnectWalletComponent,
    ModalSettingComponent,
    TableBaseComponent,
    TableBaseRowComponent,
    TableBaseTitleComponent,
    CarouselComponent,
    IconsComponent,
    CopyButtonComponent,
    LogosAccordionComponent,
    CollapseForButtonsComponent,
    FooterComponent,
    HomePageComponent,
    NftComponent,
    ToggleSwitchComponent,
    TogglePancakeComponent,
    DarkmodeBtnComponent,
    NftOverviewComponent,
    FarmsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    PancakeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
