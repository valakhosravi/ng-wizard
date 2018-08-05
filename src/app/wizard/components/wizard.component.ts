import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  steps = [
    1, 2, 3
  ];
  constructor() { }

  ngOnInit() {
  }

}
