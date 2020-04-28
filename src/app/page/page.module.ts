import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeModule} from './welcome/welcome.module';



@NgModule({
  declarations: [],
  imports: [
    WelcomeModule
  ],
  exports: [
    WelcomeModule
  ]
})
export class PageModule { }
