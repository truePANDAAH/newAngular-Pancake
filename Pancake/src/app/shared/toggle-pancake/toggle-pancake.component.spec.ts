import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePancakeComponent } from './toggle-pancake.component';

describe('TogglePancakeComponent', () => {
  let component: TogglePancakeComponent;
  let fixture: ComponentFixture<TogglePancakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglePancakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglePancakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
