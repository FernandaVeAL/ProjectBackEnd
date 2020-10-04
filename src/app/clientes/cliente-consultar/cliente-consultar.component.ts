import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  nome: string;
  cpf: string;
  email: string;
  tel: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nome: 'Beatriz', cpf: '426.941.110-65', email: 'beatriz@email.com', tel: '(78)12346-7467'},
  { nome: 'Arthur', cpf: '758.618.615-89', email: 'arthur@email.com', tel: '(34)82695-8483'},
  { nome: 'Chiclete Leona', cpf: '78.945.612/1000-78', email: 'secretaria@chicleteleona.com', tel: '(15)7854-7829'},
];

@Component({
  selector: 'app-cliente-consultar',
  templateUrl: './cliente-consultar.component.html',
  styleUrls: ['./cliente-consultar.component.css']
})
export class ClienteConsultarComponent {

  displayedColumns: string[] = ['nome', 'cpf', 'email', 'tel'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
