import {Inject, Injectable} from '@angular/core';
import {IAM_CONFIG, ServiceModule} from './service.module';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Menu} from './entity/iam.type';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: ServiceModule
})
export class IamService {

  constructor(
    private http: HttpClient,
    @Inject(IAM_CONFIG)
    private prefix: string
  ) { }

  getCurrentMenu(): Observable<Menu>{
    return this.http.get(this.prefix + '/menu/user')
      .pipe(map(res => res as Menu));
  }

  getMenu(menuCode: string, menuName: string): Observable<Menu[]>{
    const params = this.toHttpParams({"menuCode": menuCode, "menuName": menuName});
    return this.http.get(this.prefix + '/menu/list', {params: params})
      .pipe(map(res => res as Menu[]));
  }

  toHttpParams(obj: object): HttpParams{
    return Object.entries(obj).filter(entry => !(entry[1] === null || entry[1] === undefined || entry[1] === '')).reduce((a,entry) => a.append(entry[0], entry[1]), new HttpParams())
  }
}
