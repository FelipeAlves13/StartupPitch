import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserCadastro } from '../model/userCadastro';


const USER_API: string = 'http://localhost:8080/users/login';
const USER_BY_ID = 'http://localhost:8080/users';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getLogin(email: string, password: string): Observable<User> {
    let parametros = new HttpParams();
    let headersReq = new HttpHeaders();
    headersReq.append('Content-Type', 'application/json');

    parametros = parametros.append("email", email);
    parametros = parametros.append("password", password);
    return this.http.get<User>(USER_API, {
      headers: headersReq,
      params: parametros
    });
  }

  getById(id: number): Observable<User> {
    let parametros = new HttpParams();
    let headersReq = new HttpHeaders();
    headersReq.append('Content-Type', 'application/json');
    parametros = parametros.append("id", id);

    return this.http.get<User>(USER_BY_ID + "/user", {
      headers: headersReq,
      params: parametros
    });
  }

  createUser(user: UserCadastro): Observable<UserCadastro> {
    return this.http.post<User>(USER_API, user);
  }


}
