import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsiteLifecycle } from './website-lifecycle';

describe('WebsiteLifecycle', () => {
  let component: WebsiteLifecycle;
  let fixture: ComponentFixture<WebsiteLifecycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteLifecycle],
    }).compileComponents();

    fixture = TestBed.createComponent(WebsiteLifecycle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
