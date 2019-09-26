import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient/patient.service';
import { Globals } from '../globals';
import { Patient } from '../model/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
  providers: [PatientService]
})
export class PatientDetailComponent implements OnInit {

  patient: Patient;
  isClickedTemp = false;
  isClickedSpo2 = false;
  isClickedPulseRate = false;

  constructor(private router: Router, private beds: Globals, private patientService: PatientService) { }

  ngOnInit() {
    this.getPatient();
  }

  getPatient() {
    this.patientService.getPatient(this.beds.selectedPatient).subscribe(
      data => {
        this.patient = data;
      }
    )
  }

  deletePatient() {
    this.patientService.deletePatient(this.patient.patientId).subscribe(
      data => {
        this.beds.bedMap.set(this.patient.bedId, false)
      }
    );
    this.router.navigate(['dashboard']);
  }

  turnOffVitalAlarm(vital: string, button: any) {

    this.patientService.turnOffAlarm(this.patient.patientId, vital).subscribe(
      data => {
        let alerts = [];
        alerts = this.beds.alerts.get(this.patient.patientId);
        for (let i = 0; i < alerts.length; i++) {
          if (alerts[i].toLowerCase().includes(vital.toLowerCase())) {
            alerts.splice(i, 1);
          }
        }
        this.beds.alerts.set(this.patient.patientId, alerts);
      }
    )
  }
}
