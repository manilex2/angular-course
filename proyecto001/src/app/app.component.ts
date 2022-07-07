import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //PRIMER EJEMPLO: Interpolacion en los archivos HTML
  /* nombre = 'Rodriguez Pablo';
  edad = 40;
  sueldos = [1700, 1600, 1900];
  email = 'rpablo@gmail.com';
  activo = true;

  esActivo() {
    if (this.activo) {
      return 'Trabajador Activo'
    } else {
      return 'Trabajador Inactivo'
    }
  }

  ultimos3Sueldos() {
    let suma=0;
    for (let x = 0; x < this.sueldos.length; x++) {
      suma+= this.sueldos[x];
    }
    return suma;
  } */

  //SEGUNDO EJEMPLO: Directivas *ngIf y *ngFor
  /* nombre = 'Rodriguez Pablo';
  edad = 40;
  sueldos = [1700, 1600, 1900]; */

  //TERCER EJEMPLO: Captura de eventos
  /* contador = 1;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  } */

  //CUARTO EJEMPLO: Directiva ngModel
  nombre = '';
  apellido = '';
}
