import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { WizardComponent } from './demo/wizard/wizard.component';
import { AppRoutingModule } from './app-routing.module';

import { MatCardModule, MatButtonModule } from '@angular/material';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
