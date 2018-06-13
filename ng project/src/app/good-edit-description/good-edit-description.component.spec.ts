import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodEditDescriptionComponent } from './good-edit-description.component';

describe('GoodEditDescriptionComponent', () => {
  let component: GoodEditDescriptionComponent;
  let fixture: ComponentFixture<GoodEditDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodEditDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodEditDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
