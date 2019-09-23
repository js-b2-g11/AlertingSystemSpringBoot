import { Patient } from './patient'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vitals } from '../vitals';

@Injectable({providedIn:'root'})
export class PatientService {
    public constructor(private http:HttpClient) { }

    public getPatients():Observable<any> {
        return this.http.get('http://localhost:8080/api/patient');
    }

    public getPatient(patientId: number):Observable<any> {
        return this.http.get('http://localhost:8080/api/patient/'+patientId);
    }

    public savePatient(patient: Patient):Observable<any> {
        return this.http.post('http://localhost:8080/api/patient', patient);
    }

    public deletePatient(patientId: string) {
        return this.http.delete('http://localhost:8080/api/patient/'+patientId);
    }

    public getPatientFromBedId(bedId: number) {
        return this.http.get('http://localhost:8080/api/bed/'+bedId);
    }

    public getPatientVitalStatus(patientId: string, vitals: Vitals) {        
        return this.http.post('http://localhost:8080/api/patient/'+patientId+'/vitals', vitals);
    }
}