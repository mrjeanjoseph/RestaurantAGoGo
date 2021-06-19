import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const dbApi = 'https://localhost:44334/api/Restaurant';

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {
  constructor(private http: HttpClient) { }

  login(userName: string, password: string): Observable<any> {
    return this.http.get(dbApi + `/getuserinfo?userName=${userName}&password=${password}`, {
    });
  }

  register(userName: string, password: string): Observable<any> {
    return this.http.post(dbApi + `/adduser?userName=${userName}&password=${password}`, {
    });
  }
}
