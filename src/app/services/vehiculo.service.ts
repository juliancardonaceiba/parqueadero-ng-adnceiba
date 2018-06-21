import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from "rxjs/observable/of";
import { RestConfig } from '../util/RestConfig';


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private static VEHICULOS_ENDPOINT: string = RestConfig.API_ENDPOINT + "/vehiculos";

  constructor(private http: HttpClient) { }

  public getVehiculo(placa: string): Observable<any> {
    return this.http.get<any>(VehiculoService.VEHICULOS_ENDPOINT + "/" + placa, httpOptions);
  }

  public crearVehiculo(vehiculo: any): Observable<any> {
    console.log(vehiculo);
    return this.http.post<any>(VehiculoService.VEHICULOS_ENDPOINT, vehiculo, httpOptions);
  }

  public handleError(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.error(error);
      return of(result);
    };
  }

}
