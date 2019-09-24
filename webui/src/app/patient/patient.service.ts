import { Patient } from './patient'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class PatientService {
    public constructor(private http:HttpClient) { }

    public getPatients():Observable<any> {
        return this.http.get('http://localhost:8080/api/patient');
    }
}