import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsUiLib } from './components-ui-lib';

describe('ComponentsUiLib', () => {
  let component: ComponentsUiLib;
  let fixture: ComponentFixture<ComponentsUiLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsUiLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsUiLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
