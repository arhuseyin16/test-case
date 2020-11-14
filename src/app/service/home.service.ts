import { Injectable } from '@angular/core';
import {BaseService} from '../common/base-service';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user-model';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class HomeService extends  BaseService {

  page = 1;
  searchNameValue: string;

  getHttpParams(): HttpParams {
    if (this.searchNameValue) {
      return new HttpParams()
        .append('name', `${this.searchNameValue}`)
        .append('page', `${this.page}`);
    } else {
      return new HttpParams()
        .append('page', `${this.page}`);
    }
  }
  userList(): Observable<Array<UserModel>> {
    return this.get<Array<UserModel>>('users');
  }
}
