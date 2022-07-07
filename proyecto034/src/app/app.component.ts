import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  usuario: any;

  constructor(private usuarioService: UsuarioService) {};

  ngOnInit(): void {
    this.recuperarPersona();
  }

  recargar() {
    this.recuperarPersona();
  }
  recuperarPersona() {
    this.usuarioService.retornar().subscribe(result => {this.usuario = result});
  }
}
