import { Component, OnInit } from '@angular/core';

declare let copyButton: () => void;

@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.css']
})
export class CopyButtonComponent implements OnInit {

  callCopyButton() {
    copyButton();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
