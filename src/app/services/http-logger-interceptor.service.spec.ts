import { TestBed } from '@angular/core/testing';

import { HttpLoggerInterceptorService } from './http-logger-interceptor.service';

describe('HttpLoggerInterceptorService', () => {
  let service: HttpLoggerInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpLoggerInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
