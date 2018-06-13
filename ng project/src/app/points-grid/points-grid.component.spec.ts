import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsGridComponent } from './points-grid.component';

describe('PointsGridComponent', () => {
  let component: PointsGridComponent;
  let fixture: ComponentFixture<PointsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
