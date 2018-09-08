import { TestBed, inject } from '@angular/core/testing';

import { NgWizardLibService } from './ng-wizard-lib.service';

describe('NgWizardLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgWizardLibService]
    });
  });

  it('should be created', inject([NgWizardLibService], (service: NgWizardLibService) => {
    expect(service).toBeTruthy();
  }));
});
