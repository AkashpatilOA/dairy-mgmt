import { TestBed } from '@angular/core/testing';

import { MilkReportService } from './milk-report.service';

describe('MilkReportService', () => {
  let service: MilkReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilkReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
