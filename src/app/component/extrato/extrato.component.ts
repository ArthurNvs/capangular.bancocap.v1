import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  colunas = [
    { field: 'data' },
    { field: 'operação' },
    { field: 'origem' },
    { field: 'destino' },
    { field: 'valor', valueFormatter: params => this.currencyFormatter(params.data.valor, 'R$')  },
  ];

  linhas = [
      { data: '17/01/2010', operação: 'SAQUE', origem: '52341', destino: 'n/a', valor: 500 },
      { data: '10/11/2018', operação: 'DEPÓSITO', origem: '98721', destino: 'n/a', valor: 10000 },
      { data: '05/12/2019', operação: 'TRANSFERÊNCIA', origem: '83561', destino: '09103', valor: 150000 },
      { data: '23/04/2020', operação: 'SAQUE', origem: '00021', destino: 'n/a', valor: 50 },
      { data: '19/08/2020', operação: 'TRANSFERÊNCIA', origem: '90836', destino: '60186', valor: 54927 },
  ];


  constructor() { }

  currencyFormatter(valor, sign) {
    var decimal = valor.toFixed(2);
    var formatado = decimal.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace('.', ',');
    return sign + ' ' +formatado;
  }

  ngOnInit(): void {
  }

}
