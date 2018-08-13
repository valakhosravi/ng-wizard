import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DemoService } from './demo.service';
@Component({
  selector: 'ng-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

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

}
