import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClientService {
  constructor(private httpClient: HttpClient) {}

  public list(): Observable<Object> {
    return this.httpClient.get(`${environment.server}/client`);
  }
}
