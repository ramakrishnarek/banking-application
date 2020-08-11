import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmpsComponent } from './manage-emps.component';

describe('ManageEmpsComponent', () => {
  let component: ManageEmpsComponent;
  let fixture: ComponentFixture<ManageEmpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
