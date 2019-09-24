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

  clicked_temp: boolean=false;
  clicked_spo2: boolean=false;
  clicked_pulserate: boolean=false; 
  constructor(private router: Router, private beds: BedMap, private patientService: PatientService) {     
  }

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

  turnOffVitalAlarm(vital: string,button:any) {
    button.disabled=true;
    this.patientService.turnOffAlarm(this.patient.patientId, vital).subscribe(      
      data => {
        var alerts = [];
        alerts = this.beds.alerts.get(this.patient.patientId);        
        for (var i = 0; i < alerts.length; i++) {
          if (alerts[i].toLowerCase().includes(vital.toLowerCase())) {
            alerts.splice(i, 1);
          }
        }        
        this.beds.alerts.set(this.patient.patientId, alerts); 
        // this.router.navigate(['dashboard']);
      }
    )
  }
}
