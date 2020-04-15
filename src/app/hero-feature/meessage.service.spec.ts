import { TestBed } from '@angular/core/testing';

import { MeessageService } from './meessage.service';

describe('MeessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeessageService = TestBed.get(MeessageService);
    expect(service).toBeTruthy();
  });
});
