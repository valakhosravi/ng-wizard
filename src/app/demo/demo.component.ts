import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import * as $ from 'jquery';
import { DemoService } from './demo.service';
@Component({
  selector: 'ng-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, AfterContentInit {

  @ViewChild('ngWizard') ngWizard;

  ltr;
  style;
  visibility = false;
  display;
  fastForward;

  constructor(
    private demoService: DemoService
  ) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  onOpenMenuClick() {
    $('.side-bar--countainer').animate({
      'left': 0
    });
  }
  onCloseMenuClick() {
    $('.side-bar--countainer').animate({
      'left': '-110%'
    });
  }
  refreshWizardConfig(key) {
    const temp = {};
    temp[key] = this[key];
    this.demoService.updateWizardConfig(temp);
  }

  onFirstStepNextClick() {
    this.ngWizard.nextStep();
  }

  onBackClick() {
    this.ngWizard.previousStep();
  }
}
