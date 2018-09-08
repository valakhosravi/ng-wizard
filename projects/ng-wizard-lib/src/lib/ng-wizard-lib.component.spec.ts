import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWizardLibComponent } from './ng-wizard-lib.component';

describe('NgWizardLibComponent', () => {
  let component: NgWizardLibComponent;
  let fixture: ComponentFixture<NgWizardLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgWizardLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWizardLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
