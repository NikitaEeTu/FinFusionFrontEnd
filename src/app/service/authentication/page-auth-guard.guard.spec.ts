import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pageAuthGuardGuard } from './page-auth-guard.guard';

describe('pageAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => pageAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
