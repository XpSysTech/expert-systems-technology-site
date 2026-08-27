import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhatWeManage } from './what-we-manage';

describe('WhatWeManage', () => {
  let component: WhatWeManage;
  let fixture: ComponentFixture<WhatWeManage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeManage],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatWeManage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
