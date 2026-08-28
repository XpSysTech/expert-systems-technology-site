import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleMetadata } from './article-metadata';

describe('ArticleMetadata', () => {
  let component: ArticleMetadata;
  let fixture: ComponentFixture<ArticleMetadata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleMetadata],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleMetadata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
