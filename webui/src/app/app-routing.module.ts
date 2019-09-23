import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BedLayoutComponent } from './bed-layout/bed-layout.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';


const routes: Routes = [
  { path: 'list-patient', component: PatientComponent},
  { path: 'patient-detail', component: PatientDetailComponent},
  { path: '', component: PatientFormComponent },
  { path: 'dashboard', component: BedLayoutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
