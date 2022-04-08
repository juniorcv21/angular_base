import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_base';
  numero1: any = 0;
  numero2: any = 0;
  total: any = '';

  suma(){
   this.total =  this.numero1 +' | '+ this.numero2;
   this.numero1 = 0;
   this.numero2 = 0;
  }





}



