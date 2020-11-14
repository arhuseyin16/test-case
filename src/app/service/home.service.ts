import { Injectable } from '@angular/core';
import {BaseService} from '../common/base-service';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user-model';
import {HttpParams} from '@angular/common/http';
import {UserPostModel} from '../model/user-post.model';

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

  userPostId(id: string): Observable<Array<UserPostModel>> {
    return this.get<Array<UserPostModel>>(`users/ ${id}/posts`, {pageable: false});
  }
}
