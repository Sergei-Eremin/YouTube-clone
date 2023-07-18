import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchService } from './search.service';
import { DataRequestService } from './data-request.service';

describe('DataRequestService', () => {
  let service: DataRequestService;

  beforeEach(() => {
    const searchServiceStub = () => ({ cards: { find: () => ({}) } });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataRequestService, { provide: SearchService, useFactory: searchServiceStub }],
    });
    service = TestBed.inject(DataRequestService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
