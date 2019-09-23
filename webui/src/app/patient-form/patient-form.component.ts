import { Component, OnInit, Input, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../patient/patient';
import { PatientService } from '../patient/patient.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PatientComponent } from '../patient/patient.component';
import { deepEqual } from 'assert';
import { BedMap } from '../globals';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
  providers: [PatientService, PatientComponent]
})

@Injectable({providedIn: 'root'})
export class PatientFormComponent implements OnInit {      
  
  bedArray: any;  
  selectedBed: any;  

  bedKeys: string[];

  patientForm = new FormGroup ({
    patientId: new FormControl('', Validators.required),
    bedId: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
    gender: new FormControl()
  })
  
  public constructor(private beds:BedMap, private patientComponent: PatientComponent, private router: Router, private patientService:PatientService) {     
  }

  ngOnInit() {
    this.getBedArray();    
    this.bedKeys = Object.keys(this.beds.bedMap);    
  }

  onSubmit() {        
    // console.log(this.patientForm.get('bedId').value);    
    this.patientService.savePatient(this.patientForm.value)
      .subscribe( data => {        
        this.beds.bedMap.set(this.patientForm.get('bedId').value, true);
        this.router.navigate(['list-patient']);        
      });
    console.log("Done?");
  }

  getBedArray() {
    this.bedArray = JSON.parse(window.localStorage.getItem('booleanBed'));    
  }
  
}