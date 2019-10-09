import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { PatientService } from './patient.service';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        PatientComponent
    ],
    exports: [
        PatientComponent
    ],
    providers: [PatientService]
})

export class PatientModule {

}
