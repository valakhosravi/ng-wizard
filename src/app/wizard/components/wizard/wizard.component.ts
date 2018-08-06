import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'ng-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})

export class WizardComponent implements OnInit {

  private wizardStepList: NodeList[];
  private currentStepNumber = 0;
  @ViewChild('contentWrapper') content: ElementRef;
  constructor() { }

  ngOnInit() {
    this.wizardStepList = this.content.nativeElement.childNodes[0].childNodes;
  }

  nextStep(): void {
    if (this.currentStepNumber < this.wizardStepList.length - 1) {
      this.currentStepNumber++;
      $('.ng-wizard-step--countainer').animate(
        {
          'margin-left': -50 * this.currentStepNumber + '%'
        }
      );
    }
  }

  previousStep(): void {
    if (this.currentStepNumber > 0) {
      this.currentStepNumber--;
      $('.ng-wizard-step--countainer').animate(
        {
          'margin-left': -50 * this.currentStepNumber + '%'
        }
      );
    }
  }

  jumpToStep(stepNumber: number): void {

  }
}
