import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {IamService} from './iam.service';
import {concat, forkJoin, Observable} from 'rxjs';
import {Menu} from './entity/iam.type';
import {User} from './entity/auth.type';
import {first, map} from 'rxjs/operators';

type WELCOME = [User, Menu];

@Injectable()
export class PassportResolverService {

  constructor(
    private authService: AuthService,
    private iamService: IamService
  ) { }

  resolve(): Observable<WELCOME> {
    return forkJoin([
      this.authService.getUser(),
      this.iamService.getCurrentMenu()
    ]).pipe(first())
  }
}
