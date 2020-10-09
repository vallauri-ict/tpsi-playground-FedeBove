import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["Barac Obama","Lewis Hamilton","Cristiano Ronaldo","Federico Bove","Paulo Dybala","Arturo Vidal","Brad Pitt","Leonardo Di Caprio","Mario Rossi","Gianni Blu"];
  myName = 'Federico Bove';


  
  changeName(){
    this.myName = this.names[this.generateNumber(0, 9)];
  }

  generateNumber(min, max){
      return  Math.floor(Math.random() * (max - min + 1) + min);
  }
}
