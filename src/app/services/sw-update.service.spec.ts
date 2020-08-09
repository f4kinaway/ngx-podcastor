/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SwUpdateService } from './sw-update.service';

describe('Service: SwUpdate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwUpdateService]
    });
  });

  it('should ...', inject([SwUpdateService], (service: SwUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
