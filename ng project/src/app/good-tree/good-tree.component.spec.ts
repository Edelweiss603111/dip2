import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodTreeComponent } from './good-tree.component';

describe('GoodTreeComponent', () => {
  let component: GoodTreeComponent;
  let fixture: ComponentFixture<GoodTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
