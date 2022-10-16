import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthModel } from '../models/auth.model';
import { RegisterModel } from '../models/register.model';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public login(authModel: AuthModel): Observable<Object> {
    let body = new URLSearchParams();
    body.set('username', authModel.username);
    body.set('password', authModel.password);

    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };

    return this.httpClient.post(
      `${environment.server}/login`,
      body.toString(),
      options
    );
  }

  public register(registerModel: RegisterModel): Observable<Object> {
    return this.httpClient.post(
      `${environment.server}/register`,
      registerModel
    );
  }
}
