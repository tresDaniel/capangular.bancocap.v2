import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['../../app.component.css', './saque.component.css']
})
export class SaqueComponent implements OnInit {
  error: boolean = false;
  errorDesc: string = "";
  date: Date = new Date();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSaque(form: NgForm) {
    console.log(
      form.value.hash,
      form.value.valor,
    );
    this.refeshDateTime();

    if (form.value.hash == "") {
      this.error = true;
      this.errorDesc = "Preencha o hash da conta"
    } else if (form.value.valor == undefined || form.value.valor == NaN) {
      this.error = true;
      this.errorDesc = "Preencha o valor"
    } else {
      this.error = false;
      //this.router.navigate(['/dados-conta']);
    }
  }

  refeshDateTime(): void {
    this.date = new Date();
    console.log(this.date);
  }
}


// Uma tela de saque deverá ser construída com os seguintes
// campos: DataHora (preencher de forma automática com a data/hora atual),
// Valor e Hash da Conta;
// Exibir um erro caso QUALQUER campo não seja preenchido.
