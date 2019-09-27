import { Component } from '@angular/core';
import { PatientService } from './patient/patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PatientService]
})
export class AppComponent {

  title = 'Alert System';

}