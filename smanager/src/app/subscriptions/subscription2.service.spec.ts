import { TestBed } from '@angular/core/testing';

import { Subscription2Service } from './subscription2.service';

describe('Subscription2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Subscription2Service = TestBed.get(Subscription2Service);
    expect(service).toBeTruthy();
  });
});
