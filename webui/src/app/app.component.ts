import { Component } from '@angular/core';
import { PatientService } from './patient/patient.service';
import { Patient } from './patient/patient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { BedMap } from './bed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PatientService]
})
export class AppComponent {
  
  title = 'Alert System';
  
  patientArray: Patient[];

  // beds: Bed[] = [];

  data: Patient[];  

  public constructor(private beds: BedMap, private patientService: PatientService) {    
  }

  ngOnInit() {
    console.log(this.beds.bedMap);         
  }   

  bedNumberArray: number[] = [];

  storeArray() {
    
  }

}