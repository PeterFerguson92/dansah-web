import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerLivingDetailSectionComponent } from './power-living-detail-section.component';

describe('PowerLivingDetailSectionComponent', () => {
  let component: PowerLivingDetailSectionComponent;
  let fixture: ComponentFixture<PowerLivingDetailSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerLivingDetailSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerLivingDetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
