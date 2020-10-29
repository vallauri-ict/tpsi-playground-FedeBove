import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-databinding',
  templateUrl: './practicing-databinding.component.html',
  styleUrls: ['./practicing-databinding.component.css']
})
export class PracticingDatabindingComponent implements OnInit {

  allowSend:boolean = false;
  username:string = "";
  newUsername:string ='No Username was Created.';

  constructor() { }

  ngOnInit(): void {
  }

  onCreateUsername(){
    this.newUsername = "Username Created: " + this.username + "!";  
    this.username = "";
    this.allowSend = false;
  }

  enableButton(){
    if(this.username){
      this.allowSend = true;
    }
  }
}
