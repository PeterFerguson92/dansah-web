import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerLivingListComponent } from './power-living-list.component';

describe('PowerLivingListComponent', () => {
  let component: PowerLivingListComponent;
  let fixture: ComponentFixture<PowerLivingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerLivingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerLivingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
