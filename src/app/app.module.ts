import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontStyleScanComponent } from './components/Common/font-style-scan/font-style-scan.component';

@NgModule({
  declarations: [
    AppComponent,
    FontStyleScanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
