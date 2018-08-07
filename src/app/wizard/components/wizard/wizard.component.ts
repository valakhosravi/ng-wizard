import { Component, OnInit, ElementRef, ViewChild, ContentChildren, AfterContentInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
@Component({
  selector: 'ng-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})

export class WizardComponent implements OnInit, AfterContentInit {

  // private wizardStepList: any;
  @Input() fastForward: Boolean;
  private currentStepNumber = 0;
  @ViewChild('contentWrapper') content: ElementRef;
  @ContentChildren(WizardStepComponent) wizardStepList;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const temp = [];
    this.wizardStepList.forEach(wizardStep => {
      temp.push(wizardStep);
    });
    this.wizardStepList = temp;
    console.log(this.wizardStepList);
  }

  nextStep(): void {
    if (this.currentStepNumber < this.wizardStepList.length - 1) {
      this.currentStepNumber++;
      this.moveStep();
    }
  }

  previousStep(): void {
    if (this.currentStepNumber > 0) {
      this.currentStepNumber--;
      this.moveStep();
    }
  }

  private moveStep() {
    console.log(this.wizardStepList);
    $('.ng-wizard-step--countainer').animate(
      {
        'margin-left': -50 * this.currentStepNumber + '%'
      },
    );
  }

  jumpToStep(stepNumber): void {
    this.currentStepNumber = stepNumber;
    this.moveStep();
  }
}
