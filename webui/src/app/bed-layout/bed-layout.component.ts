import { Component, OnInit, Directive, Input } from '@angular/core';
import { PatientService } from '../patient/patient.service';
import { Patient } from '../model/patient';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import { Vitals } from '../model/vitals';


@Component({
  selector: 'app-bed-layout',
  templateUrl: './bed-layout.component.html',
  styleUrls: ['./bed-layout.component.css'],
  providers: [PatientService]
})
export class BedLayoutComponent implements OnInit {

  patientList: Patient[];

  patient: Patient;

  interval: any;

  constructor(private router: Router, private beds: Globals, private patientService: PatientService) { }

  ngOnInit() {
    this.beds.selectedPatient = undefined;
    this.getAllPatients();
    this.interval = setInterval(() => {
      this.getAllPatients();
      this.postPatientVitals();
      console.log(this.beds.alerts);
    }, 18000);
  }

  public getAllPatients(): void {
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

  public generateRandomVitals(): Vitals {
    let temperature: number;
    let spo2: number;
    let pulserate: number;
    temperature = Math.random() * (5.5) + 98;
    spo2 = Math.random() * (60) + 20;
    pulserate = Math.random() * (160) + 40;
    return new Vitals(temperature, spo2, pulserate);
  }

  public postPatientVitals() {
    this.patientService.getPatients().subscribe(data => {
      this.patientList = data;
      for (let patient of this.patientList) {
        if (!patient.pulseRateAlert && !patient.spo2Alert && !patient.temperatureAlert && (this.beds.selectedPatient === undefined)) {
          let vitals = this.generateRandomVitals();
          this.patientService.getPatientVitalStatus(patient.patientId, vitals).toPromise().then(
            data => { this.beds.alerts.set(patient.patientId, data) }
          );
        }
      }
    });
  }
}