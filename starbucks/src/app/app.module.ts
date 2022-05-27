import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { CountdownModule } from 'ngx-countdown';
import { MainComponent } from './main/main.component';
import { HinglandsComponent } from './hinglands/hinglands.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HinglandsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    CountdownModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
