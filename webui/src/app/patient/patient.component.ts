import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientService } from './patient.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers: [PatientService]
})
export class PatientComponent implements OnInit {  

  patientList: Patient[] = [];

  constructor(private beds: Globals, private router: Router, private patientService: PatientService) { }

  ngOnInit() {
    this.getAllPatients();
    console.log(this.beds.bedMap);
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

}
