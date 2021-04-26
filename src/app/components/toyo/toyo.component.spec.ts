import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyoComponent } from './toyo.component';

describe('ToyoComponent', () => {
  let component: ToyoComponent;
  let fixture: ComponentFixture<ToyoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
