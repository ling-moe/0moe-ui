import {NgModule} from '@angular/core';

import {WorkspaceRoutingModule} from './workspace-routing.module';

import {WorkspaceComponent} from './base/workspace.component';
import {ShareModule} from '../../share/share.module';
import { UserInfoComponent } from './userinfo/user-info.component';


@NgModule({
  imports: [
    WorkspaceRoutingModule,
    ShareModule,
  ],
  declarations: [WorkspaceComponent, UserInfoComponent],
  exports: [WorkspaceComponent]
})
export class WorkspaceModule {
}
