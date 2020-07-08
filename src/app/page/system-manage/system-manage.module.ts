import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {ShareModule} from '../../share/share.module';
import {SystemManageRoutingModule} from './system-manage-routing.module';



@NgModule({
  declarations: [MenuComponent],
    imports: [
      SystemManageRoutingModule,
      CommonModule,
      ShareModule,
    ]
})
export class SystemManageModule { }
