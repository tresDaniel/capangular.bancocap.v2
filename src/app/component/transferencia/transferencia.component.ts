import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['../../app.component.css', './transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  error: boolean = false;
  errorDesc: string = "";
  date: Date = new Date();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onTransferencia(form: NgForm) {
    console.log(
      form.value.hashOrigem,
      form.value.hashDestino,
      form.value.valor,
    );


    this.refeshDateTime();

    if (form.value.hashOrigem == "") {
      this.error = true;
      this.errorDesc = "Preencha o hash da conta origem"
    }
    else if (form.value.hashDestino == "") {
      this.error = true;
      this.errorDesc = "Preencha o hash da conta destino"
    }
    else if (form.value.valor == undefined || form.value.valor == NaN) {
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
