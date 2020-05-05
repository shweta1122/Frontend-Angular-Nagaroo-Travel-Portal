import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePdfViewComponent } from './employee-pdf-view.component';

describe('EmployeePdfViewComponent', () => {
  let component: EmployeePdfViewComponent;
  let fixture: ComponentFixture<EmployeePdfViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePdfViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePdfViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
