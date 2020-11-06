import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class RestService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

  GetGitUsers(username) {
    return this.http.get<string>('https://api.github.com/search/users?q='+username
    ).pipe(map(data => {
      return data;
    }));
  }
}
