import { Component, OnInit, OnDestroy, ViewChild  } from "@angular/core";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { Cliente } from "../cliente.model";
import { ClienteService } from "../cliente.service";
import { Subscription, Observable } from "rxjs";
import { MatPaginator } from '@angular/material/paginator';
import {EditDialogComponent} from '../dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from '../dialogs/delete/delete.dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: "app-cliente-consultar",
  templateUrl: "./cliente-consultar.component.html",
  styleUrls: ["./cliente-consultar.component.css"],
})
export class ClienteConsultarComponent implements OnInit,  OnDestroy {
  clientes: Cliente[] = [];

  displayedColumns: string[] = ["nome", "cpf", "email", "telefone","remover","editar"];
  dataSource = new MatTableDataSource<Cliente>();
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private clientesSubscription: Subscription;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public clienteService: ClienteService,private dialog: MatDialog) {}
  ngOnInit(): void {
    this.clienteService.getClientes();
    this.clientesSubscription = this.clienteService
      .getListaDeClientesAtualizadaObservable()
      .subscribe((clientes: Cliente[]) => {
        this.dataSource = new MatTableDataSource(clientes);
      });
  }
  ngOnDestroy(): void {
    this.clientesSubscription.unsubscribe();
    }
    removeAll() {
      this.dataSource.data = [];
    }
    
    OnDeleteItem(id:string,nome: string, email: string, cpf:string, telefone: string) { 
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        data: {id: id,nome: nome, email: email, cpf: cpf, telefone:telefone }
      });
    }
}
