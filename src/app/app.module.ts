import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { AppRoutingModule } from './app-routing.module';

import {
  MatCardModule, MatButtonModule, MatPaginatorModule, MatIconModule,
  MatExpansionModule, MatCheckboxModule, MatListModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardModule } from './wizard/wizard.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,

    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatExpansionModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,

    WizardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
