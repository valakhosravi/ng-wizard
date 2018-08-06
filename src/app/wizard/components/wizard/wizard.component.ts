import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';

@Component({
  selector: 'ng-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})

export class WizardComponent implements OnInit, AfterViewInit {

  private wizardStepList: NodeList[];
  @ViewChild('contentWrapper') content: ElementRef;
  constructor() { }

  ngOnInit() {
    this.wizardStepList = this.content.nativeElement.childNodes[0].childNodes;
  }

  ngAfterViewInit() {
    console.log(this.wizardStepList);
    // this.content.nativeElement.childNodes[0].style.display = 'none';
    // var textNode = this.elt.nativeElement.childNodes[0];
    // var textInput = textNode.nodeValue;
    // this.renderer.setText(textNode, textInput.toUpperCase());
  }
}
