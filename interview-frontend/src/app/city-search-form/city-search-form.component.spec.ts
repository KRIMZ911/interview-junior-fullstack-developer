import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchFormComponent } from './city-search-form.component';

describe('CitySearchFormComponent', () => {
  let component: CitySearchFormComponent;
  let fixture: ComponentFixture<CitySearchFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitySearchFormComponent]
    });
    fixture = TestBed.createComponent(CitySearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
