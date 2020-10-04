import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  nome: string;
  email: string;
  tel: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nome: 'Maria', email: 'maria@email.com', tel: '1234667'},
  { nome: 'João', email: 'joao@email.com', tel: '82695483'},
  { nome: 'Carol', email: 'carol@email.com', tel: '7158826990'},
];

@Component({
  selector: 'app-funcionario-consultar',
  templateUrl: './funcionario-consultar.component.html',
  styleUrls: ['./funcionario-consultar.component.css']
})
export class FuncionarioConsultarComponent{

  displayedColumns: string[] = ['nome', 'email', 'tel'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
