import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerLivingComponent } from './power-living.component';

describe('PowerLivingComponent', () => {
  let component: PowerLivingComponent;
  let fixture: ComponentFixture<PowerLivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerLivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerLivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
