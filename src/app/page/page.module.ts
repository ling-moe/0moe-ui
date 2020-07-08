import { NgModule } from '@angular/core';
import {WorkspaceModule} from './workspace/workspace.module';
import {SystemManageModule} from './system-manage/system-manage.module';

@NgModule({
  declarations: [],
  imports: [
    WorkspaceModule,
    SystemManageModule
  ],
  exports: [
    WorkspaceModule,
    SystemManageModule
  ]
})
export class PageModule { }
