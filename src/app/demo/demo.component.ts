import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'ng-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

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
}
