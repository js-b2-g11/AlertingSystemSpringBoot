import { Component, OnInit, Input, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient/patient.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PatientComponent } from '../patient/patient.component';
import { Globals } from '../globals';
import { numberValidator } from '../validators/number-validator';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
  providers: [PatientService, PatientComponent]
})

@Injectable({ providedIn: 'root' })
export class PatientFormComponent implements OnInit {

  bedArray: any;
  selectedBed: any;
  bedKeys: string[];
  patientForm: FormGroup;

  public constructor(private beds: Globals, private router: Router, private patientService: PatientService) {
    this.patientForm = this.createFormGroup();
  }

  ngOnInit() {    
    this.bedKeys = Object.keys(this.beds.bedMap);
  }

  createFormGroup() {
    return new FormGroup({
      patientId: new FormControl('', Validators.required),
      bedId: new FormControl('', Validators.required),
      name: new FormControl(''),
      age: new FormControl('', [Validators.required,numberValidator]),
      gender: new FormControl('')
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      this.patientService.savePatient(this.patientForm.value)
        .subscribe(data => {
          this.beds.bedMap.set(this.patientForm.get('bedId').value, true);
          this.router.navigate(['list-patient']);
        });
      console.log("Done?");
    }
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