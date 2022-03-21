import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseForButtonsComponent } from './collapse-for-buttons.component';

describe('CollapseForButtonsComponent', () => {
  let component: CollapseForButtonsComponent;
  let fixture: ComponentFixture<CollapseForButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseForButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseForButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
