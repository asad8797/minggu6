import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from '../app/server/server.component';
import { PegawaiComponent } from './pegawai/pegawai.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    PegawaiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
