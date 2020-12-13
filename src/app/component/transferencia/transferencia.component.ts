import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  error: boolean = false;
  errorDesc: string = "";
  date: Date = new Date();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onTransferir(formUser: NgForm) {
    console.log(formUser.value);
    if (formUser.value.valor == "") {
      this.error = true;
      this.errorDesc = "Defina um valor!";
    } else if (formUser.value.hashOrigem == "") {
      this.error = true;
      this.errorDesc = "Preencha o campo hash de origem";
    } else if (formUser.value.hashDestino == "") {
      this.error = true;
      this.errorDesc = "Preencha o campo hash de destino";
    } else if (!formUser.value.dataHora) {
      this.error = true;
      this.errorDesc = "Preencha o campo data";
    } else {
      this.router.navigate(['/extrato']);
    }
  }


}
