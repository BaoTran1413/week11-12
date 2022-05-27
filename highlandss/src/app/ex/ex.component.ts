import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.css']
})
export class ExComponent implements OnInit {
  outputText1='';
  constructor() { }

  ngOnInit(): void {
  }
  typeoutput(data:any){
    // this.outputText = data;
    this.outputText1 = data;

  }
}
