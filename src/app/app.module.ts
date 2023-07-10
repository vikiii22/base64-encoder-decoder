import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Base64EncodeComponent } from './base64-encode/base64-encode.component';
import { Base64DecodeComponent } from './base64-decode/base64-decode.component';
import { FormsModule } from '@angular/forms';
import { md5EncodeComponent } from './md5-encoder/md5-encoder.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Base64EncodeComponent,
    Base64DecodeComponent,
    md5EncodeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
