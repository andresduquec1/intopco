import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulatosComponent } from './mulatos.component';

describe('MulatosComponent', () => {
  let component: MulatosComponent;
  let fixture: ComponentFixture<MulatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
