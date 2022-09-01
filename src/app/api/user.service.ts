import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  signin(request): Observable<any> {
    return this.httpClient.post('/api/signin', request);
  }

  signup(request): Observable<any> {
    return this.httpClient.post('/api/signup', request);
  }
}
