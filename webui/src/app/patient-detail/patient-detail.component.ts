import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient/patient.service';
import { BedMap } from '../globals';
import { Patient } from '../patient/patient';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
  providers: [PatientService]
})
export class PatientDetailComponent implements OnInit {
  
  patient: Patient;

  constructor(private beds: BedMap, private patientService: PatientService) { }

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

}
