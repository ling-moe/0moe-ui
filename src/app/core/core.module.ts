import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {IconsProviderModule} from '../icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {ShareModule} from '../share/share.module';
import {PageModule} from '../page/page.module';
import {DelonAuthModule, SimpleInterceptor} from '@delon/auth';
import {ALAIN_CONFIG, DelonUtilModule} from '@delon/util';
import {DelonACLModule} from '@delon/acl';
import {NZ_CONFIG} from 'ng-zorro-antd';
import {alainConfig, nzConfig} from './global-config';
import {DefaultInterceptor} from './network/default.interceptor';
import {ServiceModule} from '../service/service.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceModule,
    ShareModule,
    PageModule,
    DelonAuthModule,
    DelonUtilModule,
    DelonACLModule.forRoot(),

  ],
  exports: [
    ShareModule,
    AppRoutingModule,
    DelonUtilModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN },
    {provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true},
    {provide: ALAIN_CONFIG, useValue: alainConfig},
    {provide: NZ_CONFIG, useValue: nzConfig}
    ],
})
export class CoreModule { }
