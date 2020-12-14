
export interface Operacao {
  data: Date;
  tipo: 'Saque' | 'Depósito' | 'Transferência';
  valor: number,
  hashOrigem: string;
}
