import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablefilter',
  templateUrl: './tablefilter.component.html',
  styleUrls: ['./tablefilter.component.css']
})
export class TablefilterComponent implements OnInit {
  
  pa=true
  pas=true

  
  search:any;
  tableshow = new Array<any>();
  table = [
    { id:1, name:'john wilder',room:'Film Studio'},
    { id:2, name:'Allen walker ',room:'singer Studio'},
    { id:3, name:'Lucy Heartfinia',room:'hospital'},
    { id:4, name:'william Hammer',room:'center heard'},
    { id:5, name:'balck winder',room:'QC center'},
    { id:6, name:'Cat Manafics ',room:'Managers '},
    { id:7, name:'Han Bruwno', room:'Security'},
]
// tableshow = [
//   { id:1, name:'john wilder',room:'Film Studio'},
//   { id:2, name:'Allen walker ',room:'singer Studio'},
//   { id:3, name:'Lucy Heartfinia',room:'hospital'},
//   { id:4, name:'william Hammer',room:'center heard'},
//   { id:5, name:'balck winder',room:'QC center'},
//   { id:6, name:'Cat Manafics ',room:'Managers '},
//   { id:7, name:'Han Bruwno', room:'Security'},
// ]
  constructor() { }

  ngOnInit(): void {
    this.tableshow = this.table
  }
  

  
  checkuser(){
    if(this.pa != true){
      this.tableshow.sort(function(a, b) {
            const nameA = a.name.toUpperCase(); 
            const nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
                return 0;
          });
          this.pa = !this.pa
          console.log("bao")
          console.log(this.pa)
    }else
    if(this.pa = true){
      this.tableshow.sort(function(a, b) {
            const nameA = a.name.toUpperCase(); 
            const nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
            return 0;
          });
          this.pa = ! this.pa
          console.log(" không phải bao")
          console.log(this.pa)

    }else{}
  }
  checkdependent(){
    if(this.pas != true){
      this.tableshow.sort(function(a, b) {
        const nameA = a.room.toUpperCase()[0];
        const nameB = b.room.toUpperCase()[0]; 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      this.pas = !this.pas
    }
    else
    if(this.pas = true ){
      this.tableshow.sort(function(a, b) {
        const nameA = a.room.toUpperCase();
        const nameB = b.room.toUpperCase(); 
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
      
        // names must be equal
        return 0;
      });
      this.pas = !this.pas
    }
  }
  

  inpsearch(){
    const x = this.search.toLowerCase();
    console.log(x)
    const y = this.table.filter(o => o.name.toLowerCase().includes(x) || o.room.toLowerCase().includes(x))
    const u =y.sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
    
      // names must be equal
      return 0;
    });
    console.log(y)
      this.tableshow = u
  }
  refreshPage(){
    window.location.reload();
  }

}
