import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatedContent } from './related-content';

describe('RelatedContent', () => {
  let component: RelatedContent;
  let fixture: ComponentFixture<RelatedContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedContent],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
