import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
//template: `<h1> Home </h1>
//<p> Sunt in componenta Home </p>
//`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

title:string = 'Componenta Home !!';
user:User = {
  id:1,
  nume:'Popescu',
  prenume: 'Dan',
  email: 'dan@popescu.ro'
};
image:string = 'https://i.pinimg.com/474x/92/cd/54/92cd54945a34b1a7a75c22901add2643.jpg'
showImage: boolean = true;  

constructor() { }

  ngOnInit(): void {
  }
afiseazaImagine(){
  this.showImage = !this.showImage;
}
}
