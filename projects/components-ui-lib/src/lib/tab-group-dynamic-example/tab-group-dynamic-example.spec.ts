import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupDynamicExample } from './tab-group-dynamic-example';

describe('TabGroupDynamicExample', () => {
  let component: TabGroupDynamicExample;
  let fixture: ComponentFixture<TabGroupDynamicExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupDynamicExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabGroupDynamicExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
