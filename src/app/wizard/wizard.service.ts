import { Injectable } from '@angular/core';
import { WizardModule } from './wizard.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  private wizardStepSource = new Subject<any>();
  public wizardStep = this.wizardStepSource.asObservable();

  constructor() { }

  public nextStep(): void {
    this.wizardStepSource.next('next');
  }

  public previousStep(): void {
    this.wizardStepSource.next('previous');
  }
}
