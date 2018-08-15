import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardComponent } from './components/wizard/wizard.component';
import { WizardStepComponent } from './components/wizard-step/wizard-step.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { WizardService } from './wizard.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  declarations: [
    WizardComponent,
    WizardStepComponent,
  ],
  exports: [
    WizardComponent,
    WizardStepComponent,
  ],
  providers: [
    WizardService
  ]
})
export class WizardModule { }
