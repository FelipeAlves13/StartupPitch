import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pitch } from '../model/pitch';

const PITCH_API: string = 'http://localhost:8080/persons';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PitchService {

  constructor(private http: HttpClient) { }

  // getPersons(pitch: Observable<Pitch>): Observable<Pitch[]> {

  // }


  createPerson(pitch: Pitch): Observable<Pitch> {
    return this.http.post<Pitch>(PITCH_API, pitch);
  }
}
