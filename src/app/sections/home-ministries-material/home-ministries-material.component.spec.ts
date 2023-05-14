import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMinistriesMaterialComponent } from './home-ministries-material.component';

describe('HomeMinistriesMaterialComponent', () => {
  let component: HomeMinistriesMaterialComponent;
  let fixture: ComponentFixture<HomeMinistriesMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMinistriesMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMinistriesMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
