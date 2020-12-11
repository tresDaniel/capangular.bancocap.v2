import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario:Usuario = {};

  constructor() { }

  onCadastrar(){
    console.log('teste');
  }

  ngOnInit(): void {
  }

}
