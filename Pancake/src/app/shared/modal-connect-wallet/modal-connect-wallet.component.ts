import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-connect-wallet',
  templateUrl: './modal-connect-wallet.component.html',
  styleUrls: ['./modal-connect-wallet.component.css']
})

export class ModalConnectWalletComponent implements OnInit {
  title = 'ConnectWallet';
  
  closeResult: string = ''; 

  constructor(private modalService: NgbModal) { }

  open(content:any) {
    this.modalService.open(content, { windowClass: 'connect-wallet', centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

}
