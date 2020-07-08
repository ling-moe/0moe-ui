import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {environment} from '../../environments/environment';

const API_CONFIG = environment.production ? '' : '/api';
export const AUTH_CONFIG = new InjectionToken('AuthConfigToken');
export const IAM_CONFIG = new InjectionToken('IamConfigToken');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: AUTH_CONFIG, useValue: API_CONFIG + '/auth'},
    {provide: IAM_CONFIG, useValue: API_CONFIG + '/iam'}
  ]
})
export class ServiceModule { }
