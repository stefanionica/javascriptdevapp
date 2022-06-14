import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../alerta.service';
import { User } from '../models/user';
const HEROES = [
  { id: 1, name: 'Superman' },
  { id: 2, name: 'Batman' },
  { id: 5, name: 'BatGirl' },
  { id: 3, name: 'Robin' },
  { id: 4, name: 'Flash' }

];
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
salut: string='Bine ati venit la cursul 2';
nume: string='LinkAcademy';

eroi= HEROES;

user:User = {
  id:1,
  nume:'Popescu',
  prenume: 'Dan',
  email: 'dan@popescu.ro'
};
image:string = 'https://i.pinimg.com/474x/92/cd/54/92cd54945a34b1a7a75c22901add2643.jpg'
showImage: boolean = true;  

constructor( private alertaService: AlertaService) { }

  ngOnInit(): void {
    this.alertaService.showAlert('Salut Mihai');
  }
afiseazaImagine(){
  this.showImage = !this.showImage;
}
}
