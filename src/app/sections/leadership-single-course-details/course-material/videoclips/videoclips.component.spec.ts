import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoclipsComponent } from './videoclips.component';

describe('VideoclipsComponent', () => {
  let component: VideoclipsComponent;
  let fixture: ComponentFixture<VideoclipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoclipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoclipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
