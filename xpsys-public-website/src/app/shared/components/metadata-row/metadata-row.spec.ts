import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetadataRow } from './metadata-row';

describe('MetadataRow', () => {
  let component: MetadataRow;
  let fixture: ComponentFixture<MetadataRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetadataRow],
    }).compileComponents();

    fixture = TestBed.createComponent(MetadataRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
