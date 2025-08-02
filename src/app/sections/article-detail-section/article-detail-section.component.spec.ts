import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailSectionComponent } from './article-detail-section.component';

describe('ArticleDetailSectionComponent', () => {
  let component: ArticleDetailSectionComponent;
  let fixture: ComponentFixture<ArticleDetailSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetailSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleDetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
