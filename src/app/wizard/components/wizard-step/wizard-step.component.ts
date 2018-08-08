import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent implements OnInit {
  @Input() title = '';
  @Input() route?;
  constructor() { }

  ngOnInit() {
  }

}
