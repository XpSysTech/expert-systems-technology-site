import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatedServices } from './related-services';

describe('RelatedServices', () => {
  let component: RelatedServices;
  let fixture: ComponentFixture<RelatedServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedServices],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
