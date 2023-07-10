import { Component } from '@angular/core';
import { MD5 } from 'crypto-js';

@Component({
  selector: 'app-base64-encode',
  templateUrl: './md5-encoder.component.html',
  styleUrls: ['./md5-encoder.component.css']
})
export class md5EncodeComponent {
  inputText!: string;
  encodedText!: string;

  encode() {
    //codificar en md5
    this.encodedText = MD5(this.inputText).toString();
  }
}
