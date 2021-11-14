import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Landing Page (Root Component)
import { AppComponent } from './app.component';
import { FontStyleInputComponent } from './components/Common/font-style-input/font-style-input.component';
import { FontStyleScannerComponent } from './components/Common/font-style-scanner/font-style-scanner.component';
import { ButtonComponent } from './components/Generic/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    FontStyleInputComponent,
    FontStyleScannerComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
