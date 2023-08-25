import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMinistriesComponent } from './home-ministries.component';

describe('HomeMinistriesComponent', () => {
  let component: HomeMinistriesComponent;
  let fixture: ComponentFixture<HomeMinistriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMinistriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMinistriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
