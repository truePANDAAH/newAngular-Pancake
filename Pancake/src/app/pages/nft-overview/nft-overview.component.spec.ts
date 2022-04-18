import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftOverviewComponent } from './nft-overview.component';

describe('NftOverviewComponent', () => {
  let component: NftOverviewComponent;
  let fixture: ComponentFixture<NftOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
