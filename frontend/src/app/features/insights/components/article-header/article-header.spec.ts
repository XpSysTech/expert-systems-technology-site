import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleHeader } from './article-header';

describe('ArticleHeader', () => {
  let component: ArticleHeader;
  let fixture: ComponentFixture<ArticleHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
