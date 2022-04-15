import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartInSecondsComponent } from './start-in-seconds.component';

describe('StartInSecondsComponent', () => {
  let component: StartInSecondsComponent;
  let fixture: ComponentFixture<StartInSecondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartInSecondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartInSecondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
