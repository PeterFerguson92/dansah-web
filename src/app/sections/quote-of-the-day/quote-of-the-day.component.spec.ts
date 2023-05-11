import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteOfTheDayComponent } from './quote-of-the-day.component';

describe('QuoteOfTheDayComponent', () => {
  let component: QuoteOfTheDayComponent;
  let fixture: ComponentFixture<QuoteOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
