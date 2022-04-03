import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pitch } from '../model/pitch';

const PITCH_API: string = 'http://localhost:8080/pitchs';
const PITCHS_BY_LOCAL_SERIE_INVESTIMENTO_QTD_FUNCIONARIOS = "/search";
// const httpOptions = {

// };
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PitchService {

  constructor(private http: HttpClient) { }

  getPitchs(local: string, serieInvestimentos: string, qtdFuncionarios: number): Observable<Pitch[]> {
    let parametros = new HttpParams();
    let headersReq = new HttpHeaders();
    headersReq.append('Content-Type', 'application/json');
    // headersReq.append('Accept', '*/*');
    // headersReq.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    // headersReq.append('Access-Control-Allow-Methods', 'GET');
    // headersReq.append('Access-Control-Allow-Headers', ['Origin','X-Requested-With','Content-Type', 'Authorization','X-Auth-Token']);
    // headersReq.append('Access-Control-Allow-Credentials', 'true');
    // headersReq.append('User-Agent', 'http://localhost:4200');
    // headersReq.append('Accept-Encoding', 'gzip, deflate, br');
    // headersReq.append('Connection', 'keep-alive');
    parametros=parametros.append("serieInvestimento", ("%"+serieInvestimentos +"%"));
    parametros=parametros.append("local", ("%"+local+"%"));
    parametros=parametros.append("qtdFuncionarios", Number.parseInt(""+qtdFuncionarios));
    console.log(parametros.get("serieInvestimento"))
    return this.http.get<Pitch[]>(PITCH_API + PITCHS_BY_LOCAL_SERIE_INVESTIMENTO_QTD_FUNCIONARIOS, {
      headers:headersReq,
      params: parametros,

    })
  }


  createPerson(pitch: Pitch): Observable<Pitch> {
    return this.http.post<Pitch>(PITCH_API, pitch);
  }
}
