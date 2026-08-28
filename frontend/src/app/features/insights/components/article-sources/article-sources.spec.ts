import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleSources } from './article-sources';

describe('ArticleSources', () => {
  let component: ArticleSources;
  let fixture: ComponentFixture<ArticleSources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleSources],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleSources);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
