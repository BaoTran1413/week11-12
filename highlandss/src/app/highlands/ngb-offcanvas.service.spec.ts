import { TestBed } from '@angular/core/testing';

import { NgbOffcanvasService } from './ngb-offcanvas.service';

describe('NgbOffcanvasService', () => {
  let service: NgbOffcanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbOffcanvasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
