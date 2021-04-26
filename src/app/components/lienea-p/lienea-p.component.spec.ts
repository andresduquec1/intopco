import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieneaPComponent } from './lienea-p.component';

describe('LieneaPComponent', () => {
  let component: LieneaPComponent;
  let fixture: ComponentFixture<LieneaPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieneaPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieneaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
