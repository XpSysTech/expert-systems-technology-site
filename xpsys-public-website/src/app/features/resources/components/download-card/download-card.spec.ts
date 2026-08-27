import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DownloadCard } from './download-card';

describe('DownloadCard', () => {
  let component: DownloadCard;
  let fixture: ComponentFixture<DownloadCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
