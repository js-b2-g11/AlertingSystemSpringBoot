import { Component, OnInit, Input, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../patient/patient';
import { PatientService } from '../patient/patient.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PatientComponent } from '../patient/patient.component';
import { deepEqual } from 'assert';
import { BedMap } from '../globals';
import { numberValidator } from '../validators/number-validator';

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

  patientForm: FormGroup;
  // patientId: FormControl;
  // bedId: FormControl;
  // name: FormControl;
  // age: FormControl;
  // gender: FormControl;  
  
  public constructor(private beds:BedMap, private patientComponent: PatientComponent, private router: Router, private patientService:PatientService) {
    this.patientForm = this.createFormGroup();     
  }

  ngOnInit() {
    
    this.getBedArray();    
    this.bedKeys = Object.keys(this.beds.bedMap);    
  }

  createFormGroup() {
    return new FormGroup ({
      patientId: new FormControl('', Validators.required),
      bedId: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, numberValidator]),
      gender: new FormControl('',[Validators.required])
    });
  }

  onSubmit() {        
    if (this.patientForm.valid) {
      this.patientService.savePatient(this.patientForm.value)
      .subscribe( data => {        
        this.beds.bedMap.set(this.patientForm.get('bedId').value, true);
        this.router.navigate(['list-patient']);        
      });
    console.log("Done?");
    }        
  }

  getBedArray() {
    this.bedArray = JSON.parse(window.localStorage.getItem('booleanBed'));    
  }

  get patientId() {
    return this.patientForm.get('patientId');
  }
    
  get bedId() {
    return this.patientForm.get('bedId');
  }
  
  get name() {
    return this.patientForm.get('name');
  }

  get age() {
    return this.patientForm.get('age');
  }

  get gender() {
    return this.patientForm.get('gender');
  }
}