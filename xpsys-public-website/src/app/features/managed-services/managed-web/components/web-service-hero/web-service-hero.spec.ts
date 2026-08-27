import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebServiceHero } from './web-service-hero';

describe('WebServiceHero', () => {
  let component: WebServiceHero;
  let fixture: ComponentFixture<WebServiceHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebServiceHero],
    }).compileComponents();

    fixture = TestBed.createComponent(WebServiceHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
