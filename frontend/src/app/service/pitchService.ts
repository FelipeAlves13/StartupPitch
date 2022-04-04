import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pitch } from '../model/pitch';
import { PitchCadastro } from '../model/pitchCadastro';

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

  getTodosOsPitchs():Observable<Pitch[]>{
    return this.http.get<Pitch[]>(PITCH_API);
  }

  getPitchs(local: string, serieInvestimentos: string, qtdFuncionarios: number): Observable<Pitch[]> {
    let parametros = new HttpParams();
    let headersReq = new HttpHeaders();
    headersReq.append('Content-Type', 'application/json');

    parametros=parametros.append("serieInvestimento", ("%"+serieInvestimentos +"%"));
    parametros=parametros.append("local", ("%"+local+"%"));
    parametros=parametros.append("qtdFuncionarios", Number.parseInt(""+qtdFuncionarios));
    console.log(parametros.get("serieInvestimento"))
    return this.http.get<Pitch[]>(PITCH_API + PITCHS_BY_LOCAL_SERIE_INVESTIMENTO_QTD_FUNCIONARIOS, {
      headers:headersReq,
      params: parametros,

    })
  }


  createPitch(pitch: PitchCadastro): Observable<Pitch> {
    return this.http.post<Pitch>(PITCH_API, pitch);
  }

  updatePitch(id:number,pitch:Pitch):Observable<Pitch> {
    return this.http.put<Pitch>(PITCH_API+"/"+id,pitch);
  }

}
