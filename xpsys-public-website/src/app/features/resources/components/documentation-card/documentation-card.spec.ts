import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentationCard } from './documentation-card';

describe('DocumentationCard', () => {
  let component: DocumentationCard;
  let fixture: ComponentFixture<DocumentationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentationCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentationCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
