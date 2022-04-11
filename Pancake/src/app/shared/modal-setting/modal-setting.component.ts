import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-setting',
  templateUrl: './modal-setting.component.html',
  styleUrls: ['./modal-setting.component.css'],
  providers: [NgbModal]
})
export class ModalSettingComponent implements OnInit {
  toggleClass: boolean = false;
  toggleSecondClass: boolean = true;
  toggleThirdClass: boolean = true;

  // constructor(config: NgbModalConfig, private modalService: NgbModal) {
  //   // customize default values of modals used by this component tree
  //   config.backdrop = 'static';
  //   config.keyboard = false;
  // }
  

  ngOnInit(): void {
  }
  
  // open(content: any) {
  //   this.modalService.open(content);
  // }

  // open(content: any) {
  //   this.modalService.open(content);
  // }

  closeResult!: string;

  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(content: any) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content: any) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }

  openModalDialogCustomClass(content: any) {
    this.modalService.open(content, { modalDialogClass: 'dark-modal' });
  }

  // openButton() {
  //   if (this.toggleClass !== this.toggleClass) {
  //     this.toggleClass = false
  //   }
  //   else {
  //     this.toggleClass = true
  //   }
  // }

  // openSecondButton() {
  //   if (this.toggleSecondClass !== this.toggleSecondClass) {
  //     this.toggleSecondClass = false
  //   }
  //   else {
  //     this.toggleSecondClass = true
  //   }
  // }

  // openThirdButton() {
  //   if (this.toggleThirdClass !== this.toggleThirdClass) {
  //     this.toggleThirdClass = false
  //   }
  //   else {
  //     this.toggleThirdClass = true
  //   }
  // }

  percentButtonClassAssign($event: { currentTarget: any; }) {
    var button = $event.currentTarget;
    var buttonName = button.name;
    switch (buttonName) {
      case 'button1': {
        if (this.toggleClass !== this.toggleClass) {
          this.toggleClass = false
        }
        else {
          this.toggleClass = true
        }
        break;
      }

      case 'button2': {
        if (this.toggleSecondClass !== this.toggleSecondClass) {
          this.toggleSecondClass = false
        }
        else {
          this.toggleSecondClass = true
        }
        break;
      }

      case 'button3': {
        if (this.toggleThirdClass !== this.toggleThirdClass) {
          this.toggleThirdClass = false
        }
        else {
          this.toggleThirdClass = true
        }
        break;
      }
    }
    // button.classList.add('left-btn-two');
    // button.classList.remove('left-btn');
    // console.log(buttonName)
    // console.log(button)
  }
}
