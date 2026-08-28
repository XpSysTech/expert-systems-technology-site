import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleBody } from './article-body';

describe('ArticleBody', () => {
  let component: ArticleBody;
  let fixture: ComponentFixture<ArticleBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleBody],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
