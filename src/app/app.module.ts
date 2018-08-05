import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { WizardComponent } from './demo/wizard/wizard.component';
import { AppRoutingModule } from './app-routing.module';

import { MatCardModule, MatButtonModule, MatPaginatorModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    WizardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,

    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
