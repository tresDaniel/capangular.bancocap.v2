import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { Conta } from 'src/app/model/conta.model';

@Component({
  selector: 'app-conta-view',
  templateUrl: './conta-view.component.html',
  styleUrls: ['./conta-view.component.css']
})
export class ContaViewComponent implements OnInit {
  conta:Conta = {cliente: "Kalila",hash:"1234463131",saldo: 2516};
  
  colunas = [
    { field: 'cliente' },
    { field: 'hash' },
    { field: 'saldo', valueFormatter: params => this.currencyFormatter(params.data.saldo, 'R$')  },
  ];

  linhas = [
      { cliente: 'Daniel', hash: '001', saldo: 2516 },
      { cliente: 'Daniel', hash: '002', saldo: 2516 },
      { cliente: 'Daniel', hash: '003', saldo: 2516 },
      { cliente: 'Daniel', hash: '004', saldo: 2516},
  ];

  constructor() { }

  currencyFormatter(saldo, sign) {
    var decimal = saldo.toFixed(2);
    var formatado = decimal.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return sign + ' ' +formatado;
  }

  ngOnInit(): void {
  }

}
