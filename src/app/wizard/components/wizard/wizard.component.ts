import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'ng-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})

export class WizardComponent implements OnInit {

  private wizardStepList: any[];
  private currentStepNumber = 0;
  @ViewChild('contentWrapper') content: ElementRef;
  constructor() { }

  ngOnInit() {
    this.wizardStepList = this.content.nativeElement.childNodes[0].childNodes;
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

  jumpToStep(stepNumber: number): void {
    // think about it
  }
}
