import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-obra-fun-consultar',
  templateUrl: './obra-fun-consultar.component.html',
  styleUrls: ['./obra-fun-consultar.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ObraFunConsultarComponent {


  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['codigo', 'datainicio', 'datatermino', 'cliente'];
  expandedElement: PeriodicElement | null;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface PeriodicElement {
  codigo: string;
  datainicio: string;
  datatermino: string;
  cliente: string;
  tipo: string;
  porte: number;
  endereco: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  descricao: string;
  aviso: string;
  datap1: string,
  desp1: string,
  datap2: string,
  desp2: string,
  datap3: string,
  desp3: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    codigo: 'R7812',
    datainicio: '28/03/2016',
    datatermino: '10/05/2016',
    cliente: 'Antônio',
    tipo: 'Residencial',
    porte: 300.00,
    endereco: 'Rua São Vicente',
    numero: 381,
    bairro: 'Santa Luiza',
    cidade: 'Itú',
    estado: 'São Paulo',
    cep: '87951-852',
    descricao: 'Cliente pretende uma casa de 3 andares...',
    aviso: 'A obra está faltando o certidão de usu de terra...',
    datap1: '05/04/2016',
    desp1: 'Entrega de Design',
    datap2: '15/04/2016',
    desp2: 'Confirmação de Design',
    datap3: '20/04/2016',
    desp3: 'Em construção'
  },

  {
    codigo: 'I8597',
    datainicio: '12/07/2008',
    datatermino: '20/08/2008',
    cliente: 'Antônio',
    tipo: 'Industrial',
    porte: 800.00,
    endereco: 'Rua São Carlos',
    numero: 76,
    bairro: 'São Carlos',
    cidade: 'São Paulo',
    estado: 'São Paulo',
    cep: '4582-806',
    descricao: 'Cliente pretende reformar a loja de roupa para uma loja de bijoteria...',
    aviso: 'A obra está faltando o certidão de usu de terra...',
    datap1: '12/07/2008',
    desp1: 'Entrega de planta',
    datap2: '15/07/2016',
    desp2: 'Confirmação do cliente da planta final da reforma',
    datap3: '18/07/2016',
    desp3: 'Em construção'
  }
];
