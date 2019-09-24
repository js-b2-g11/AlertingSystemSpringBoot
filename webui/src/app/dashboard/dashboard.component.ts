import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {  

  patientList:Patient[];
  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    this.getAllPatients();
  }

  public getAllPatients(): void {
    this.dashboardService.getPatients().subscribe(data =>
      {this.patientList = data});
  }

}
