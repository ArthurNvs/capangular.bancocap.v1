import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/model/conta.model';

@Component({
  selector: 'app-conta-view',
  templateUrl: './conta-view.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ContaViewComponent implements OnInit {
  
  colunas = [
    { field: 'cliente' },
    { field: 'hash' },
    { field: 'saldo', valueFormatter: params => this.currencyFormatter(params.data.saldo, 'R$')  },
  ];

  linhas = [
      { cliente: 'Arthur', hash: '001', saldo: 500 },
      { cliente: 'Daniel', hash: '002', saldo: 255 },
      { cliente: 'Kalila', hash: '003', saldo: 950 },
      { cliente: 'Nilson', hash: '004', saldo: 260},
      { cliente: 'Reinaldo', hash: '005', saldo: 389},
  ];

  constructor() { }

  currencyFormatter(saldo, sign) {
    var decimal = saldo.toFixed(2);
    var formatado = decimal.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace('.', ',');
    return sign + ' ' +formatado;
  }

  ngOnInit(): void {
  }

}
