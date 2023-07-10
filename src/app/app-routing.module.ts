import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Base64EncodeComponent } from './base64-encode/base64-encode.component';
import { Base64DecodeComponent } from './base64-decode/base64-decode.component';
import { md5EncodeComponent } from './md5-encoder/md5-encoder.component';

const routes: Routes = [
  { path: 'encode', component: Base64EncodeComponent },
  { path: 'decode', component: Base64DecodeComponent },
  { path: 'md5', component: md5EncodeComponent},
  { path: '', redirectTo: '/encode', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
