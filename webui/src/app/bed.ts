import { Injectable } from "@angular/core";
import { PatientService } from './patient/patient.service';
import { Patient } from './patient/patient';

@Injectable()
export class BedMap {

    patientArray: Patient[];
    
    bedMap: Map<number, boolean> = new Map();

    public constructor(private patientService: PatientService) {
        for (var i = 201; i <= 210; i++) {
            this.bedMap.set(i, false);
        }        
        this.setBedMapValues();
    }

    setBedMapValues() {
        this.patientService.getPatients().subscribe(
            data => {
              this.patientArray = data;
              if (this.patientArray) {
                for(let patient of this.patientArray) {
                  this.bedMap.set(patient.bedId, true);
                }
              }              
            }      
        )
    }
}