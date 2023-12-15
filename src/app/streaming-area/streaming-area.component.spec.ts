import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingAreaComponent } from './streaming-area.component';

describe('StreamingAreaComponent', () => {
  let component: StreamingAreaComponent;
  let fixture: ComponentFixture<StreamingAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamingAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
