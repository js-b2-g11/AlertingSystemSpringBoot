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

  del_patient_list: number;

  patientList: Patient[] = [];

  constructor(private beds: BedMap, private router: Router, private patientService: PatientService) { }

  ngOnInit() {
    this.getAllPatients();
    console.log(this.beds.bedMap);
    this.postPatientVitals();
  }

  public getAllPatients(): void {
    this.patientService.getPatients().subscribe(data => { this.patientList = data });
  }

  public navigatePrevious() {
    this.beds.setBedMapValues();
    this.router.navigate(['']);
  }

  public deletePatient(patient: Patient) {
    this.patientService.deletePatient(patient.patientId).subscribe(
      data => {
        this.patientList = this.patientList.filter(h => h !== patient);
        this.beds.bedMap.set(patient.bedId, false)
      }
    );    
  }

  public postPatientVitals() {
    var temperature: number;
    var spo2: number;
    var pulserate: number;        
    this.patientService.getPatients().subscribe(data => {
    this.patientList = data;
      for (let patient of this.patientList) {
        temperature = Math.random() * (250) + 20;
        spo2 = Math.random() * (100) + 20;
        pulserate = Math.random() * (70) + 50;
        let vitals = new Vitals(temperature, spo2, pulserate);
        this.patientService.getPatientVitalStatus(patient.patientId, vitals).subscribe(
          data => { }
        );
      }
    });
  }

}
