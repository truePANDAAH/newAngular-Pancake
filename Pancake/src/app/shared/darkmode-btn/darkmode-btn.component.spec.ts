import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkmodeBtnComponent } from './darkmode-btn.component';

describe('DarkmodeBtnComponent', () => {
  let component: DarkmodeBtnComponent;
  let fixture: ComponentFixture<DarkmodeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkmodeBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkmodeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
