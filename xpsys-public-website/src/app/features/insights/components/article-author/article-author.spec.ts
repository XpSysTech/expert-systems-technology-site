import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleAuthor } from './article-author';

describe('ArticleAuthor', () => {
  let component: ArticleAuthor;
  let fixture: ComponentFixture<ArticleAuthor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleAuthor],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleAuthor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
