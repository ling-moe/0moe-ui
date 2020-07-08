import {Inject, Injectable} from '@angular/core';
import {AUTH_CONFIG, ServiceModule} from './service.module';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken, User} from './entity/auth.type';
import {map} from 'rxjs/operators';
import {Menu} from './entity/iam.type';

@Injectable({
  providedIn: ServiceModule
})
export class AuthService {

  constructor(private http: HttpClient, @Inject(AUTH_CONFIG) private prefix: string) { }

  login(usename: string, password: string): Observable<AuthToken>{
    const param = new FormData();
    param.append("username", usename);
    param.append("password", password);
    param.append("grant_type", "password");
    param.append("scope", "admin");
    param.append("client_id", "password_client");
    param.append("client_secret", "admin");
    return this.http.post(this.prefix + "/oauth/token", param).pipe(map(res => res as AuthToken));
  }

  getUser(): Observable<User>{
    return this.http.get(this.prefix + '/user/self')
      .pipe(map(res => res as User));
  }

}
