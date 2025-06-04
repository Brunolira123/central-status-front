import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filial } from 'src/app/model/filial.model';


@Injectable({ providedIn: 'root' })
export class FilialService {

 private readonly apiUrl = 'http://localhost:8081/api/v1/filiais';

 constructor(private http: HttpClient) { }

 getFiliais(): Observable<Filial[]> {
   return this.http.get<Filial[]>(this.apiUrl);
 }
}
