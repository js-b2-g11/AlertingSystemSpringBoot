import { Injectable } from "@angular/core";
import { PatientService } from './patient/patient.service';
import { Patient } from './patient/patient';

@Injectable()
export class BedMap {

    patientArray: Patient[];

    selectedPatient: any;

    alerts: Map<string, any> = new Map();
    
    selectedLayout: number=1;

    bedMap: Map<number, boolean> = new Map();

    public constructor(private patientService: PatientService) {
        for (var i = 201; i <= 212; i++) {
            this.bedMap.set(i, false);
        }        
        this.setBedMapValues();             
    }

    public getMap(): Map<number, boolean> {
      return this.bedMap;
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
