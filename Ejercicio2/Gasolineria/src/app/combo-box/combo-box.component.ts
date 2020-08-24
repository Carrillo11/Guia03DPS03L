import { Component, OnInit } from '@angular/core';
//Agregar las siguientes modulos
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
@Component({
selector: 'app-combo-box',
templateUrl: './combo-box.component.html',
styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {
//crear las siguientes variables
unidades;
opcionSeleccionado: string ;
valorgl:number;
valorconversion:number;
constructor() {
}
ngOnInit() {
//inicializar las variables
this.unidades = ["Regular","Especial","Diesel"];
this.opcionSeleccionado="Selecciona";
this.valorgl=0;
this.valorconversion=0;
}
//funcion que realiza los calculos
capturar() {
switch(this.opcionSeleccionado){
case'Regular':
this.valorconversion=this.valorgl * 4.25;
break;
case'Especial':
this.valorconversion=this.valorgl * 4.05;
break;
case'Diesel':
this.valorconversion=this.valorgl * 3.96;
break;
}
}
}
export class AppComponent {
}