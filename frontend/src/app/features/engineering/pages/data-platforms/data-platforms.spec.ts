import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataPlatforms } from './data-platforms';

describe('DataPlatforms', () => {
  let component: DataPlatforms;
  let fixture: ComponentFixture<DataPlatforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPlatforms],
    }).compileComponents();

    fixture = TestBed.createComponent(DataPlatforms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
