import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MilkReportService {
private apiUrl=''
  constructor(private http:HttpClient) {}
  saveMilkReport(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
