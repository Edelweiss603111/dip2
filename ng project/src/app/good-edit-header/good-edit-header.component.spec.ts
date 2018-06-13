import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodEditHeaderComponent } from './good-edit-header.component';

describe('GoodEditHeaderComponent', () => {
  let component: GoodEditHeaderComponent;
  let fixture: ComponentFixture<GoodEditHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodEditHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodEditHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
