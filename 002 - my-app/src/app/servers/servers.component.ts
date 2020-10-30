import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus:string ='No server was created';
  serverName:string="-digita qui il nome del nuovo server-";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus="Server "+this.serverName+" was Created";
  }

  // onUpdateServerName(event: any){
  //     this.serverName=event.target.value;
  //     this.serverName="-digita qui il nome del nuovo server-";
  // }
}