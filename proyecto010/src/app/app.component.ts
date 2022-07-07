import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* articulos: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("https://scratchya.com.ar/vue/datos.php")
    .subscribe(resultado => {
      this.articulos = resultado;
    })
  } */

  paises: any;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get("https://api.covid19api.com/summary")
    .subscribe(resultado => {
      this.paises = resultado;
    })
  }
}
