import { Component, OnInit, ElementRef } from '@angular/core';
import { cmt } from '../models/comment';
import { fakecmt } from "../fake-comment";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  host:{
    '(document:click)': 'onClick($event)',
  }
})
export class StatusComponent implements OnInit {

  comments = fakecmt;

  cmtbtn:boolean = true;
  cmtcmt:boolean= false;

  seelittle:boolean = true;
  seeall:boolean= false;

  emoji:boolean = false;

  constructor(
    private _eref: ElementRef
  ) { }

  ngOnInit() {
  }

  // onClick(event){
  //   if (!this._eref.nativeElement.contains(event.target))
  //   this.selectOutside();
  // }

  // selectOutside(){
  //   this.cmtcmt = false;
  //   this.cmtbtn = true;
  // }

  onKeydown(event) {
    console.log(event);
  }

  selectCmtbtn(){
    this.cmtcmt = true;
    this.cmtbtn = false;
  }

  selectMore(){
    this.seelittle = false;
    this.seeall = true;
  }

  clickemoji(){
    this.emoji = true;
  }
}
