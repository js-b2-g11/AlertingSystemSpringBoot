import { Component } from '@angular/core';
import { PatientService } from './patient/patient.service';
import { Patient } from './model/patient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PatientService]
})
export class AppComponent {

  title = 'Alert System';

}