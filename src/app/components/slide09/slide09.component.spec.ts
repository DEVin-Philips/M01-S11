import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide09Component } from './slide09.component';

describe('Slide09Component', () => {
  let component: Slide09Component;
  let fixture: ComponentFixture<Slide09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Slide09Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slide09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
