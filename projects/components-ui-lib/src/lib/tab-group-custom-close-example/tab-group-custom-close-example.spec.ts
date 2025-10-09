import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupCustomCloseExample } from './tab-group-custom-close-example';

describe('TabGroupCustomCloseExample', () => {
  let component: TabGroupCustomCloseExample;
  let fixture: ComponentFixture<TabGroupCustomCloseExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupCustomCloseExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabGroupCustomCloseExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
