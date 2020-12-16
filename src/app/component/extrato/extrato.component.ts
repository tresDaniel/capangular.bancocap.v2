import { Component, OnInit } from '@angular/core';
import { Operacao } from 'src/app/model/operacao.model';
import { TransacoesService } from 'src/app/service/transacoes.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['../../app.component.css', './extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  
  colunas = [
    { headerName: 'Data / Hora', field: 'data', valueFormatter: params => this.dateFormatter(params.data.data) },
    { field: 'tipo' },
    { field: 'valor', valueFormatter: params => this.currencyFormatter(params.data.valor, 'R$') },
    { field: 'hashOrigem' }
  ];

  operacoes: Operacao[] = [];

  constructor(private transacoesService: TransacoesService) {
    this.operacoes = transacoesService.getExtrato();
   }

  ngOnInit(): void {
  }

  currencyFormatter(valor, sign) {
    var decimal = valor.toFixed(2);
    var formatado = decimal.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace('.', ',');
    return sign + ' ' + formatado;
  }

  dateFormatter(date: Date) {
    console.log(date);
    return date.toLocaleDateString();
  }


}