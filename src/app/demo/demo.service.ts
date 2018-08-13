import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private wizardConfigSource = new Subject<any>();
  public wizardConfig = this.wizardConfigSource.asObservable();

  constructor() { }

  public updateWizardConfig(newWizardConfig) {
    this.wizardConfigSource.next(newWizardConfig);
  }
}
