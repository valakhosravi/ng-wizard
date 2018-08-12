import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DemoService } from './demo.service';
@Component({
  selector: 'ng-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

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
  refreshWizardConfig() {
    this.demoService.updateWizardConfig('test');
  }

}
