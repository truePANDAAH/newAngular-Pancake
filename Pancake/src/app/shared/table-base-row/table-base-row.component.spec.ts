import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBaseRowComponent } from './table-base-row.component';

describe('TableBaseRowComponent', () => {
  let component: TableBaseRowComponent;
  let fixture: ComponentFixture<TableBaseRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBaseRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBaseRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
