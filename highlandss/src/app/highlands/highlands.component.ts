// import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig,NgbModal, NgbActiveModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { Component, TemplateRef, ViewEncapsulation, OnInit } from '@angular/core';
import {  } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-highlands',
  templateUrl: './highlands.component.html',
  styleUrls: ['./highlands.component.css']
})
export class HighlandsComponent implements OnInit {
  page = false;
  pname="";
  public isCollapsed = true;
  show = true;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  tableshow :any;
  table =[
    { id:1, name:'LICH HOAT DONG TET NGUYEN DAN  2022 CUA HIGHLANDS COFFEE TREN TOAN QUOC '},
    { id:2, name:'"TRA DI ROI TINH" CUNG TRA SEN VANG TU  HIGHLANDS COFFEE'},
    { id:3, name:'HIGHLANDS COFFEE APPLICATION TERMS & CONDITIONS'}
  ]
 
  constructor(private offcanvasService:NgbCarouselConfig) { }

  
  ngOnInit(): void {
    this.tableshow = this.table
  }
  

  onClickedOutside(e: Event) {
    console.log('Clicked outside:', e);}

  clickoutaide(){
    this.isCollapsed = !this.isCollapsed;
  }
  collapse(){
    this.page= false;
  }

  // outside(){
  //   this.page=!this.page;
  // }
    outside(){
    this.page=true;
  }
    outsides(){
    this.page=false;
  }
  
 
  myfunction(){
    console.log("table")
  }
  


insearch(){
  const y = this.pname.toLowerCase()
  
  this.tableshow = this.table.filter(e =>e.name.toLowerCase().includes(y))
  
}




}
