import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent implements OnInit {
  @Input() title = '';
  @Input() route?;

  @Output() nextStep =  new EventEmitter<any>();
  @Output() previousStep =  new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
