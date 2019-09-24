import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { PatientService } from './patient.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers: [PatientService]
})
export class PatientComponent implements OnInit {  

  patientList:Patient[];
  constructor(private patientService:PatientService) { }

  ngOnInit() {
    this.getAllPatients();
  }

  public getAllPatients(): void {
    this.patientService.getPatients().subscribe(data =>
      {this.patientList = data});
  }

}
