import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  error: boolean = false;
  errorDesc: string = "";
  date: Date = new Date();

  constructor(private router: Router) { }

  ngOnInit(): void {}

  onDeposito(formUser: NgForm) {
    console.log(formUser.value);
    if (formUser.value.valor == "") {
      this.error = true;
      this.errorDesc = "Defina um valor!";
    } else if (formUser.value.hash == "") {
      this.error = true;
      this.errorDesc = "Preencha o campo hash";
    } else if (!formUser.value.dataHora) {
      this.error = true;
      this.errorDesc = "Preencha o campo data";
    } else {
      this.router.navigate(['/home']);
    }
  }

}
