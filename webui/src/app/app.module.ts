import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientModule } from './patient/patient.module';
import { RouterModule } from '@angular/router';
import { BedMap } from './globals';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BedLayoutComponent } from './bed-layout/bed-layout.component';
import { CommonModule } from '@angular/common';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientFormComponent,
    PageNotFoundComponent,
    BedLayoutComponent,
    PatientDetailComponent,    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,    
    HttpClientModule,
    ReactiveFormsModule,    
    RouterModule    
  ],
  providers: [BedMap],
  bootstrap: [AppComponent]
})
export class AppModule { }
