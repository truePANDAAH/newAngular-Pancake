import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConnectWalletComponent } from './modal-connect-wallet.component';

describe('ModalConnectWalletComponent', () => {
  let component: ModalConnectWalletComponent;
  let fixture: ComponentFixture<ModalConnectWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConnectWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConnectWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
