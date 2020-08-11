import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private _dataservice: DataService) { }

/* Intercting First compnent to Child component*/  
   myMessage: string = "";
   status: boolean = false;
   title : string = "My First Component";
   name : string ="dipti";
   courses : Array<string> = ['php', 'java','oracle'];
   message = "";
   userData : object;
   

  ngOnInit() {
    this._dataservice.getUserData().subscribe(res=>{
        this.userData = res;
        console.log(this.userData);
    });
  } 
  

  ClickMe() {    
    this.status = !this.status; 
    if(this.status == true) {
      this.myMessage = "I clicked on my Button";        
    } else {
      this.myMessage = "";
    }
  }

  showServiceInfo(){
    this._dataservice.myfirstService();
    
  }
  

}
