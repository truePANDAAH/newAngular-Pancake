import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBaseTitleComponent } from './table-base-title.component';

describe('TableBaseTitleComponent', () => {
  let component: TableBaseTitleComponent;
  let fixture: ComponentFixture<TableBaseTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBaseTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBaseTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
