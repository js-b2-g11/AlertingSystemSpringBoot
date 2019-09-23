import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { PatientService } from './patient.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BedMap } from '../globals';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers: [PatientService]
})
export class PatientComponent implements OnInit { 
  
  testing: string="Test";

  del_patient_list: number;

  patientList:Patient[];
  constructor(private beds: BedMap, private router: Router, private patientService:PatientService) { }

  ngOnInit() {    
    this.getAllPatients();
    console.log(this.beds.bedMap);
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

}
