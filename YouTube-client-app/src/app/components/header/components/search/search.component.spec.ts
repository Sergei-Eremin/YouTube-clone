import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { DataRequestService } from 'src/app/services/data-request.service';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    const searchServiceStub = () => ({});
    const dataRequestServiceStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SearchComponent],
      providers: [
        { provide: SearchService, useFactory: searchServiceStub },
        { provide: DataRequestService, useFactory: dataRequestServiceStub },
      ],
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`minlength has default value`, () => {
    expect(component.minlength).toEqual(3);
  });
});
