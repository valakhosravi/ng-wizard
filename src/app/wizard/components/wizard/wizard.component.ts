import { Component, OnInit, ElementRef, ViewChild, ContentChildren, AfterContentInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DemoService } from '../../../demo/demo.service';
import { WizardService } from '../../wizard.service';
@Component({
  selector: 'ng-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})

export class WizardComponent implements OnInit, AfterContentInit {

  // private wizardStepList: any;
  @Input() ltr: Boolean;
  @Input() style: String = 'out-line'; // filled, two-tone, sharp
  @Input() visibility: Boolean = true;
  @Input() display: String = 'number'; // bullet, icon
  @Input() fastForward: Boolean;

  @ViewChild('contentWrapper') content: ElementRef;
  @ContentChildren(WizardStepComponent) wizardStepList;

  private currentStepNumber = 0;

  routerEventsSubscription;
  warningIndex = -1;
  errorIndex = -1;
  constructor(
    private demoService: DemoService,
    private wizardService: WizardService
  ) { }

  ngOnInit() {
    this.wizardService.wizardStep.subscribe(
      data => {
        console.log('wizardService', data);
      }
    );
    this.demoService.wizardConfig.subscribe(
      data => {
        // tslint:disable-next-line:forin
        for (const key in data) {
          this[key] = data[key];
        }
      }
    );
  }

  ngAfterContentInit() {
    const temp = [];
    this.wizardStepList.forEach(wizardStep => {
      temp.push(wizardStep);
    });
    this.wizardStepList = temp;
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

  error(status: boolean) {
    if (status) {
      this.errorIndex = this.currentStepNumber;
    } else {
      this.errorIndex = -1;
    }
  }

  warning(status: boolean) {
    if (status) {
      this.warningIndex = this.currentStepNumber;
    } else {
      this.warningIndex = -1;
    }
  }
}
