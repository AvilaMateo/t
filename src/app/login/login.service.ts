import { Injectable } from '@angular/core';
import { loginI } from './login.interface';
import { resposeI } from './response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: String = "https://reqres.in/"

  constructor(private http: HttpClient) { }

  onLogin(form: loginI): Observable<resposeI> {
    let dir = this.url + 'api/login'
    return this.http.post<resposeI>(dir, form);
  }
}
