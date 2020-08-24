import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'
@Component({
selector: 'app-sueldo-neto',
templateUrl: './sueldo-neto.component.html',
styleUrls: ['./sueldo-neto.component.css']
})
export class SueldoNetoComponent implements OnInit {
registro=[];
empleado:any;
nombre:string;
sueldo:number;
contador:number;
constructor() { }
ngOnInit() {
this.sueldo=0;
this.nombre='';
this.contador=0;
}
ingresar(){
this.empleado={"nombre":this.nombre,"sueldo":this.sueldo};
this.registro.push(this.empleado);
this.contador++;
}
}
