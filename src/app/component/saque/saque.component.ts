import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  error: boolean = false;
  errorDesc: string = "";
  dataHora: Date = new Date();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSaque(formUser: NgForm) {
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
      this.router.navigate(['/extrato']);
    }
  }

}
