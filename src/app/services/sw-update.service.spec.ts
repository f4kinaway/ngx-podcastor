import { TestBed, inject } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

import { SwUpdateService } from './sw-update.service';
import { MockSwUpdate } from 'mocks/services/mock.sw-update.service';
import { MockMatSnackBar } from 'mocks/services/mock.mat-snack-bar.service';

describe('Service: SwUpdate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SwUpdateService,
        { provide: SwUpdate, useClass: MockSwUpdate },
        { provide: MatSnackBar, useClass: MockMatSnackBar },
      ]
    });
  });

  it('should ...', inject([SwUpdateService], (service: SwUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
