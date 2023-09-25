import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {
private apiUrl = 'http://localhost:3000'
constructor(private http: HttpClient) {}

login(username: string, password: string): Observable<any> {
  const credentials = { username , password };
  return this.http.post(`${this.apiUrl}/user-login`, credentials);
}
}