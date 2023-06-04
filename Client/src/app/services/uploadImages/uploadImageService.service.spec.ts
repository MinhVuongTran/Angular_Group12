/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UploadImageServiceService } from './uploadImageService.service';

describe('Service: UploadImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadImageServiceService]
    });
  });

  it('should ...', inject([UploadImageServiceService], (service: UploadImageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
