import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient/patient.service';
import { BedMap } from '../globals';
import { Patient } from '../patient/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
  providers: [PatientService]
})
export class PatientDetailComponent implements OnInit {
  
  patient: Patient;

  constructor(private router: Router, private beds: BedMap, private patientService: PatientService) { }

  ngOnInit() {
    this.getPatient();
  }

  getPatient() {
    this.patientService.getPatient(this.beds.selectedPatient).subscribe (
      data => {
        this.patient = data;
      }
    )
  }

  deletePatient() {
    this.patientService.deletePatient(this.patient.patientId).subscribe (
      data => {         
        this.beds.bedMap.set(this.patient.bedId, false)}        
    );
    this.router.navigate(['dashboard']);
  }

  turnOffVitalAlarm(vital: string) {
    this.patientService.turnOffAlarm(this.patient.patientId, vital).subscribe(
      data => {console.log(data); this.router.navigate(['dashboard']);}
    )
  }
}
