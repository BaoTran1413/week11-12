import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'eabt';
  isToken:any;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.isToken = localStorage.getItem('token') != undefined;
    if(!this.isToken){
      this.router.navigate(['/login'])
    }
  }
}
