import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components for Routing
import { FontStyleInputComponent } from './components/Common/font-style-input/font-style-input.component';
import { FontStyleScannerComponent } from './components/Common/font-style-scanner/font-style-scanner.component';

const routes: Routes = [
  { path: 'validation', component: FontStyleInputComponent, },
  { path: 'scanner/:imgId', component: FontStyleScannerComponent, },
  //Redirect to the validation path
  { path: '', redirectTo: 'validation', pathMatch: 'full', },
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
