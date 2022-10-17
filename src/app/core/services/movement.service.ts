import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchModel } from '../models/search.model';

@Injectable()
export class MovementService {
  constructor(private httpClient: HttpClient) {}

  public list(searchModel: SearchModel): Observable<Object> {
    let params = null;
    if (searchModel.fromDate === '' && searchModel.toDate === '') {
      params = new HttpParams()
        .set('clientId', searchModel.clientId)
        .set('limit', searchModel.limit)
        .set('page', searchModel.page);
    } else {
      params = new HttpParams()
        .set('clientId', searchModel.clientId)
        .set('fromDate', this.getFormatDate(searchModel.fromDate))
        .set('toDate', this.getFormatDate(searchModel.toDate))
        .set('limit', searchModel.limit)
        .set('page', searchModel.page);
    }
    return this.httpClient.get(`${environment.server}/movement/list`, {
      params,
    });
  }

  public balance(searchModel: SearchModel): Observable<Object> {
    let params = null;
    if (searchModel.fromDate === '' && searchModel.toDate === '') {
      params = new HttpParams()
        .set('clientId', searchModel.clientId)
        .set('limit', searchModel.limit)
        .set('page', searchModel.page);
    } else {
      params = new HttpParams()
        .set('clientId', searchModel.clientId)
        .set('fromDate', this.getFormatDate(searchModel.fromDate))
        .set('toDate', this.getFormatDate(searchModel.toDate));
    }
    return this.httpClient.get(`${environment.server}/movement/balance`, {
      params,
    });
  }

  public getFormatDate(currentDate: string): string {
    const year: number = new Date(currentDate).getFullYear();
    const month: number = new Date(currentDate).getMonth() + 1;
    const day: number = new Date(currentDate).getDate();
    return `${year}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }`;
  }
}
