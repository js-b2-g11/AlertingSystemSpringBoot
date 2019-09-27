import { Injectable } from "@angular/core";
import { PatientService } from './patient/patient.service';
import { Patient } from './model/patient';

@Injectable()
export class Globals {

  patientArray: Patient[];

  selectedPatient: any;

  selectedLayout = 1;

  alerts: Map<string, any> = new Map();  

  bedMap: Map<number, boolean> = new Map();

  public constructor(private patientService: PatientService) {
    for (var i = 201; i <= 212; i++) {
      this.bedMap.set(i, false);
    }
    this.setBedMapValues();
  }

  setBedMapValues() {
    this.patientService.getPatients().subscribe(
      data => {
        this.patientArray = data;
        if (this.patientArray) {
          for (let patient of this.patientArray) {
            this.bedMap.set(patient.bedId, true);
          }
        }
      }
    )
  }

}
