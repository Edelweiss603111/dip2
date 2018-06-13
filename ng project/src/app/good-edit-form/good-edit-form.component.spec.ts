import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodEditFormComponent } from './good-edit-form.component';

describe('GoodEditFormComponent', () => {
  let component: GoodEditFormComponent;
  let fixture: ComponentFixture<GoodEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
