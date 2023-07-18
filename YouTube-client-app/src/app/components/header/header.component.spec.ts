import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`isSortingVisible has default value`, () => {
    expect(component.isSortingVisible).toEqual(false);
  });

  it(`isSortingVisible will change its value to true when the onSettingClick() method is called`, () => {
    component.onSettingClick();
    expect(component.isSortingVisible).toEqual(true);
  });
});
