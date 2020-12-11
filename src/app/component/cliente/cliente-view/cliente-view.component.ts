import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['./cliente-view.component.css']
})
export class ClienteViewComponent implements OnInit {

  cliente:Cliente = {nome:"Kalila", cpf:"12312312322"};
  colunas = [
    { field: 'nome' },
    { field: 'cpf' },
  ];

  linhas = [
      { nome: 'Daniel', cpf: '001' },
      { nome: 'Daniel', cpf: '002' },
      { nome: 'Daniel', cpf: '003'},
      { nome: 'Daniel', cpf: '004'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
