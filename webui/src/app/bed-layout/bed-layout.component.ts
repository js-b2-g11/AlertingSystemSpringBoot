import { Component, OnInit, Directive, Input } from '@angular/core';
import { PatientService } from '../patient/patient.service';
import { Patient } from '../patient/patient';
import { BedMap } from '../globals';
import { Router } from '@angular/router';
import { Vitals } from '../vitals';

@Component({
  selector: 'app-bed-layout',
  templateUrl: './bed-layout.component.html',
  styleUrls: ['./bed-layout.component.css'],
  providers: [PatientService]
})
export class BedLayoutComponent implements OnInit {

  selectedLayout: number = 1;

  patientList: Patient[];

  patient: Patient;

  interval: any;

  constructor(private router: Router, private beds: BedMap, private patientService: PatientService) { }

  ngOnInit() {
    this.getAllPatients();
    this.interval = setInterval(() => {
      this.getAllPatients();
      this.postPatientVitals();
      console.log(this.beds.alerts);
    }, 10000);
  }

  public getAllPatients(): void {
    // this.patientService.getPatients()
    //   .toPromise()
    //   .then(response => this.patientList = response);    
    this.patientService.getPatients().subscribe((data) =>
      this.patientList = data);
  }

  public getPatient(bedId: number): any {
    return this.patientService.getPatient(bedId).subscribe(
      data => this.patient = data
    );
  }

  onClickBed(bedId: number) {
    if (!this.beds.bedMap.get(bedId)) {
      this.router.navigate(['patient-form']);
    } else {
      this.patientService.getPatientFromBedId(bedId).subscribe(
        data => {
          this.beds.selectedPatient = data;
          this.router.navigate(['patient-detail']);
        }
      )
    }
  }

  public postPatientVitals() {
    var temperature: number;
    var spo2: number;
    var pulserate: number;
    this.patientService.getPatients().subscribe(data => {
      this.patientList = data;
      for (var  i = 0; i < this.patientList.length; i++) {
        console.log("maybe this works?");
      }
      for (let patient of this.patientList) {
        if (!patient.pulseRateAlert && !patient.spo2Alert && !patient.temperatureAlert) {
          temperature = Math.random() * (5.5) + 98;
          spo2 = Math.random() * (60) + 20;
          pulserate = Math.random() * (160) + 40;
          console.log(temperature,spo2,pulserate);
          let vitals = new Vitals(temperature, spo2, pulserate);
          this.patientService.getPatientVitalStatus(patient.patientId, vitals).subscribe(
            data => { this.beds.alerts.set(patient.patientId, data)}
          );
        }
      }
    });
  }

  // setAlert() {
  //   for (let bed of this.beds.bedMap.keys()) {
  //     console.log(this.beds.bedMap.get(bed));
  //     if (this.beds.bedMap.get(bed)) {
  //       var patient = this.patientList.find(patient => patient.bedId === bed);
  //       console.log(patient.pulseRateAlert);
  //       if (patient.pulseRateAlert ||
  //         patient.spo2Alert ||
  //         patient.temperatureAlert) {          
  //       }
  //     }
  //   }
  // }
}