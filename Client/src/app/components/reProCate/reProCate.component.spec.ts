/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReProCateComponent } from './reProCate.component';

describe('ReProCateComponent', () => {
  let component: ReProCateComponent;
  let fixture: ComponentFixture<ReProCateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReProCateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReProCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
