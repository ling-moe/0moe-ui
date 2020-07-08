import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/passport/login' },
  { path: 'workspace', loadChildren: () => import('./page/workspace/workspace.module').then(m => m.WorkspaceModule) },
  { path: 'passport', loadChildren: () => import('./page/passport/passport.module').then(m => m.PassportModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
