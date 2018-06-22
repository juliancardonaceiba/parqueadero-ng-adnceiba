import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestConfig } from '../util/RestConfig';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private static REGISTROS_ENDPOINT: string = RestConfig.API_ENDPOINT + "/registros";
  private static REGISTROS_PENDIENTES_ENDPOINT: string = RegistroService.REGISTROS_ENDPOINT + "/pendientes";
  private static REGISTROS_HISTORICOS_ENDPOINT: string = RegistroService.REGISTROS_ENDPOINT + "/historico";

  constructor(private http: HttpClient) { }


  public registrarEntrada(placa: any): Observable<any> {
    return this.http.post<any>(RegistroService.REGISTROS_ENDPOINT + "/" + placa, null, httpOptions);
  }

  public registrarSalida(placa: any): Observable<any> {
    return this.http.put<any>(RegistroService.REGISTROS_ENDPOINT + "/" + placa, null, httpOptions);
  }

  public consultarRegistrosActuales(): Observable<any> {
    return this.http.get<any>(RegistroService.REGISTROS_PENDIENTES_ENDPOINT, httpOptions);
  }

  public consultarRegistrosHistoricos(): Observable<any> {
    return this.http.get<any>(RegistroService.REGISTROS_HISTORICOS_ENDPOINT, httpOptions);
  }
}
