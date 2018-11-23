import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMiniComponent } from './status-mini.component';

describe('StatusMiniComponent', () => {
  let component: StatusMiniComponent;
  let fixture: ComponentFixture<StatusMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
