import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styleUrls: ['./keyboards.component.css']
})
export class KeyboardsComponent implements OnInit {

  @Output() onTyping:EventEmitter<string> = new EventEmitter<string>();
  typeText = "";
  // onUpper: boolean = false;
  // interval:any;
  // onClick:boolean = false;
  keyboardCharacter = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f", "g","h","j","k","l","z","x","c","v","b","n","m"]
  
  constructor() { }

  ngOnInit(): void {
  }
  type(e:any){
    this.typeText = this.typeText.concat(e.target.textContent);
    this.onTyping.emit(this.typeText);
  }
  // upperLowerClick(e: any) {
  //   if(this.onUpper)
  //     this.keyboardCharacter = this.keyboardCharacter.map(i=>i.toLowerCase());
  //   else
  //     this.keyboardCharacter = this.keyboardCharacter.map(i=>i.toUpperCase());
  //   this.onUpper = !this.onUpper;
  // }

  

  // mousedown(e:any){
  //   this.onClick = true;
  //   this.interval = setInterval(()=>{
  //     this.typeText = this.typeText.slice(0,-1);
  //   },50);
  // }

  // mouseup(e:any){
  //   this.onClick = false;
  //   clearInterval(this.interval);
  //   this.onTyping.emit(this.typeText); 
  // }

}
