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
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
