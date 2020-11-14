import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Config {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  abstract getHttpParams(): HttpParams;

  protected get<T>(url?: string, config?: Config): Observable<T> {
    if (this.getHttpParams() && (config === undefined || (config && config.pageable))) {
      return this.httpClient.get<T>(this.apiUrl + url, {params: this.getHttpParams()});
    } else {
      return this.httpClient.get<T>(this.apiUrl + url);
    }
  }

}
