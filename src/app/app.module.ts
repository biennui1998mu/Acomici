import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommentService } from "../app/comment.service";

import { AppComponent } from './app.component';
import { MaterialModule } from './materials';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StatusComponent } from './status/status.component';
import { StatusMiniComponent } from './status-mini/status-mini.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    StatusMiniComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    CommentService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
