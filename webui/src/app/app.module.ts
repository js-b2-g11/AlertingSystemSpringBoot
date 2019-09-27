import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Globals } from './globals';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BedLayoutComponent } from './bed-layout/bed-layout.component';
import { CommonModule } from '@angular/common';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { AppLoadModule } from './app-load/app-load.module';

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
    RouterModule,
    AppLoadModule   
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
