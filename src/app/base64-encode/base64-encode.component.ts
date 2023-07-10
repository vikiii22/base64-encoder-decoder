import { Component } from '@angular/core';

@Component({
  selector: 'app-base64-encode',
  templateUrl: './base64-encode.component.html',
  styleUrls: ['./base64-encode.component.css']
})
export class Base64EncodeComponent {
  inputText!: string;
  encodedText!: string;

  encode() {
    this.encodedText = btoa(this.inputText);
  }
}
