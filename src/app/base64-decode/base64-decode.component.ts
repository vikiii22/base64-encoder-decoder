import { Component } from '@angular/core';

@Component({
  selector: 'app-base64-decode',
  templateUrl: './base64-decode.component.html',
  styleUrls: ['./base64-decode.component.css']
})
export class Base64DecodeComponent {
  inputText!: string;
  decodedText!: string;

  decode() {
    this.decodedText = atob(this.inputText);
  }
}
