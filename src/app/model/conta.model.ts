import { Cliente } from './cliente.model';

export interface Conta{
  hash?:string,
  cliente?:Cliente,
  saldo?: number
}