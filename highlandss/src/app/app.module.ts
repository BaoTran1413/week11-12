import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { CountdownModule } from 'ngx-countdown';
import { HttpClientModule } from '@angular/common/http';
import { HighlandsComponent } from './highlands/highlands.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { ExComponent } from './ex/ex.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TablefilterComponent } from './tablefilter/tablefilter.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlandsComponent,
    KeyboardsComponent,
    ExComponent,
    TablefilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    NgxQRCodeModule,
    CountdownModule,
    HttpClientModule,
    ClickOutsideModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
