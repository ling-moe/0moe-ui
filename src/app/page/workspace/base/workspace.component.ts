import { Component, OnInit } from '@angular/core';
import {PassportResolverService} from '../../../service/passport-resolver.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Menu} from '../../../service/entity/iam.type';
import {User} from '../../../service/entity/auth.type';

@Component({
  selector: 'workspace-base',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.less']
})
export class WorkspaceComponent implements OnInit {
  isCollapsed = false;
  menus: Menu[];
  user: User;

  constructor(
    private passportResolverService: PassportResolverService,
    private route: ActivatedRoute
  ) {
    this.route.data.pipe(map(res =>res.menuAndUser)).subscribe(([user, menu]) => {
      console.log(menu, user);
      this.menus = menu;
      this.user = user;
    });
  }

  ngOnInit() {

  }

  get realName(){
    return this.user.realName;
  }

  childrenFlag(children: Menu[]): boolean{
    return children !== null && children.length !== 0;
  }
}
