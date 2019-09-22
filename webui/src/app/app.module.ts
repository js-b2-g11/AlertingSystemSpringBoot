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
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BedMap } from './bed';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientFormComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    ReactiveFormsModule,    
    RouterModule    
  ],
  providers: [BedMap],
  bootstrap: [AppComponent]
})
export class AppModule { }
