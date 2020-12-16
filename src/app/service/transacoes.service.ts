import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { Conta } from '../model/conta.model';
import { Operacao } from '../model/operacao.model';

@Injectable()
export class TransacoesService {

  contas: Conta[] = [];
  operacoes: Operacao[] = [];

  constructor() {
    this.contas = [{ 
      cliente: {
        nome: 'Arthur',
        cpf: '008.983.384-84'
      }, 
        hash: 'e719680850a69a32e6d48d523a8af197', 
        saldo: 500 
      }, { 
      cliente: {
        nome: 'Daniel',
        cpf: '425.085.020-06'
      }, 
       hash: '3f7a216550f114f42d65c2a0c528d99b', 
       saldo: 255 
      }, { 
        cliente: {
          nome: 'Kalila',
          cpf: '738.586.970-01'
        }, 
        hash: '8e3ac5adb5c00afcb844b78ddb0fc30e', 
        saldo: 950 
      }, { 
        cliente: {
          nome: 'Nilson',
          cpf: '171.590.100-27'
        }, 
        hash: '0ba4d012ed6618b3eeaa3dd53000dac9', 
        saldo: 260 
      }, { 
        cliente: {
          nome: 'Reinaldo',
          cpf: '866.676.730-89'
        }, 
        hash: 'f138d42cc1fd0ac0b789fc773aed3291', 
        saldo: 389 
      }];

      this.operacoes = [
      { data: new Date(2020, 2, 11), tipo: 'Saque', valor: 550, hashOrigem: 'f138d42cc1fd0ac0b789fc773aed3291' },
      { data: new Date(2020, 2, 12), tipo: 'Depósito', valor: 50.99, hashOrigem: '' },
      { data: new Date(2020, 2, 10), tipo: 'Transferência', valor: 1300, hashOrigem: 'e719680850a69a32e6d48d523a8af197' },
      { data: new Date(2020, 3, 1), tipo: 'Transferência', valor: 5000, hashOrigem: '8e3ac5adb5c00afcb844b78ddb0fc30e' },
      { data: new Date(2020, 2, 11), tipo: 'Saque', valor: 55.10, hashOrigem: '' }];
  }

  execute(): Conta[] {
    return this.contas;
  }

  getExtrato(): Operacao[] {
    return this.operacoes;
  }
}