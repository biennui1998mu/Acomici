import { Component, OnInit } from '@angular/core';
import { cmt } from "../models/comment";
import { fakecmt } from "../fake-comment"

@Component({
  selector: 'app-status-mini',
  templateUrl: './status-mini.component.html',
  styleUrls: ['./status-mini.component.scss']
})
export class StatusMiniComponent implements OnInit {

  comment:boolean = false;
  noncmt:boolean = true;

  onecmt:boolean = true;
  morecmt:boolean = false;

  more_comment = fakecmt;

  constructor() { }

  ngOnInit() {
  }

  onclick(){
    this.comment = true;
    this.noncmt = false;
  }
  clickmore(){
    this.onecmt = false;
    this.morecmt = true;
  }
}
