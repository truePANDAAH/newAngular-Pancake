import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSettingComponent } from './modal-setting.component';

describe('ModalSettingComponent', () => {
  let component: ModalSettingComponent;
  let fixture: ComponentFixture<ModalSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
