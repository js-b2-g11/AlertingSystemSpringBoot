import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient/patient.service';
import { Patient } from '../patient/patient';
import { BedMap } from '../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bed-layout',
  templateUrl: './bed-layout.component.html',
  styleUrls: ['./bed-layout.component.css'],
  providers: [PatientService]
})
export class BedLayoutComponent implements OnInit {

  selectedLayout: number = 1;  

  patientList: Patient[];

  constructor(private router: Router, private beds: BedMap, private patientService: PatientService) { }

  ngOnInit() {
    this.getAllPatients();   
  }

  public getAllPatients(): void {
    this.patientService.getPatients().subscribe((data) =>
      this.patientList = data);
  }

  onClickBed(bedId: number) {
    if (!this.beds.bedMap.get(bedId)) {
      this.router.navigate(['']);
    } else {
      this.patientService.getPatientFromBedId(bedId).subscribe (
        data => {
          this.beds.selectedPatient = data;          
          this.router.navigate(['patient-detail']);
        }
      )
    }
  }
}
