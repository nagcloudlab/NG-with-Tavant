import { TestBed } from '@angular/core/testing';

import { CanActivateChildService } from './can-activate-child.service';

describe('CanActivateChildService', () => {
  let service: CanActivateChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
