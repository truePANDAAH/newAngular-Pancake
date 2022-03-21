import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosAccordionComponent } from './logos-accordion.component';

describe('LogosAccordionComponent', () => {
  let component: LogosAccordionComponent;
  let fixture: ComponentFixture<LogosAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogosAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
