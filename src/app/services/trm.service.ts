import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestConfig } from '../util/RestConfig';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class TrmService {

  private static TRM_ENDPOINT: string = RestConfig.API_ENDPOINT + "/trm";

  constructor(private http: HttpClient) { }

  public consultarTRM(): Observable<any> {
    return this.http.get<any>(TrmService.TRM_ENDPOINT, httpOptions);
  }
}
