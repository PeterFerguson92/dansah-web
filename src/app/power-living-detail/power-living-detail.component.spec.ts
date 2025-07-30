import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerLivingDetailComponent } from './power-living-detail.component';

describe('PowerLivingDetailComponent', () => {
  let component: PowerLivingDetailComponent;
  let fixture: ComponentFixture<PowerLivingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerLivingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerLivingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
