import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './base/workspace.component';
import {PassportResolverService} from '../../service/passport-resolver.service';

const children = <Routes>[
  { path: 'system-manage', loadChildren: () => import('../system-manage/system-manage.module').then(m => m.SystemManageModule) }
];

const routes: Routes = [
  {path: '', component: WorkspaceComponent, resolve: {menuAndUser: PassportResolverService}, children: children},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PassportResolverService
  ]
})
export class WorkspaceRoutingModule { }
