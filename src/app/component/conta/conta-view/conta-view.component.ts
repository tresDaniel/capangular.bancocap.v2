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
      { cliente: 'Daniel', hash: '001', saldo: 500 },
      { cliente: 'Kalila', hash: '002', saldo: 255 },
      { cliente: 'Reinaldo', hash: '003', saldo: 950 },
      { cliente: 'Arthur', hash: '004', saldo: 260},
      { cliente: 'Nilson', hash: '005', saldo: 260},
  ];

  constructor() { }

  currencyFormatter(saldo, sign) {
    var decimal = saldo.toFixed(2);
    var formatado = decimal.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace('.', ',');
    return sign + ' ' +formatado;
  }

  ngOnInit(): void {
  }

}
