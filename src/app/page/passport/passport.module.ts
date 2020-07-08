import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassportRoutingModule } from './passport-routing.module';
import { LoginComponent } from './login/login.component';
import {ShareModule} from '../../share/share.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PassportRoutingModule,
    ShareModule,
  ]
})
export class PassportModule { }
