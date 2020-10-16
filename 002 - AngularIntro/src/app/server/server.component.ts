import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
    serverID:number = 10;
    serverStatus:string;
    getServerStatus(){
      this.serverStatus = (this.generateNumber(0, 1) == 0) ? 'Offline' : 'Online';
      return this.serverStatus;
    }
    getServerID(){
      this.serverID = this.generateNumber(1,100);
      return this.serverID;
    }
    generateNumber(min, max){
      return  Math.floor(Math.random() * (max - min + 1) + min);
  }
  }