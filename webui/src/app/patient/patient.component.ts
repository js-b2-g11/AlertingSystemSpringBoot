import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { PatientService } from './patient.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BedMap } from '../globals';
import { Vitals } from '../vitals';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers: [PatientService]
})
export class PatientComponent implements OnInit { 
  
  testing: string="Test";

  del_patient_list: number;

  patientList:Patient[] = [];

  constructor(private beds: BedMap, private router: Router, private patientService:PatientService) { }

  ngOnInit() {    
    this.getAllPatients();
    console.log(this.beds.bedMap);    
    this.postPatientVitals();
  }

  public getAllPatients(): void {
    this.patientService.getPatients().subscribe(data =>
      {this.patientList = data});
  }

  public navigatePrevious() {
    this.beds.setBedMapValues();
    this.router.navigate(['']);
  }

  public deletePatient(patient: Patient) {
    this.patientService.deletePatient(patient.patientId).subscribe (
      data => { 
        this.patientList = this.patientList.filter(h => h !== patient);
        this.beds.bedMap.set(patient.bedId, false)}
    );
    // this.router.navigate(['']);
  }

  public testClick(event) {
    alert("div clicked!"+event);
  }

  public postPatientVitals() {    
    let temperature = Math.random() * (250) + 20;
    let spo2 = Math.random() * (100) + 20;
    let pulserate = Math.random() * (70) + 50;
    console.log(temperature, spo2, pulserate);
    let vitals = new Vitals(temperature,spo2, pulserate);
    this.patientService.getPatients().subscribe(data =>
      { this.patientList = data;
        for (let patient of this.patientList) {          
          this.patientService.getPatientVitalStatus(patient.patientId, vitals).subscribe (
            data => {}
          );
        }
      });    
  }

}
