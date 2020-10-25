import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { Funcionario } from "../funcionario.model";
import { FuncionarioService } from "../funcionario.service";
import { Subscription, Observable } from "rxjs";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { EditDialogFuncionarioComponent } from "../dialogs/edit/edit.dialog.component";
import { DeleteDialogFuncionarioComponent } from "../dialogs/delete/delete.dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-funcionario-consultar",
  templateUrl: "./funcionario-consultar.component.html",
  styleUrls: ["./funcionario-consultar.component.css"],
})
export class FuncionarioConsultarComponent implements OnInit, OnDestroy {
  clientes: Funcionario[] = [];

  public totalDeFuncionarios: number = 10;
  public totalDeFuncionariosPorPagina: number = 2;
  public opcoesTotalDeFuncionariosPorPagina: number[] = [2, 5, 10];
  displayedColumns: string[] = [
    "nome",
    "email",
    "telefone",
    "remover",
    "editar",
  ];
  dataSource = new MatTableDataSource<Funcionario>();
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private funcionariosSubscription: Subscription;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    public clienteService: FuncionarioService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.clienteService.getFuncionarios();
    this.funcionariosSubscription = this.clienteService
      .getListaDeFuncionariosAtualizadaObservable()
      .subscribe((funcionarios: Funcionario[]) => {
        this.dataSource = new MatTableDataSource(funcionarios);
      });
  }
  onPaginaAlterada(dadosPagina: PageEvent) {
    console.log(dadosPagina);
  }
  ngOnDestroy(): void {
    this.funcionariosSubscription.unsubscribe();
  }

  OnDeleteItem(id: string, nome: string, email: string, telefone: string) {
    const dialogRef = this.dialog.open(DeleteDialogFuncionarioComponent, {
      data: { id: id, nome: nome, email: email, telefone: telefone },
    });
  }
  OnEditItem(id: string, nome: string, email: string, telefone: string) {
    const dialogRef = this.dialog.open(EditDialogFuncionarioComponent, {
      data: { id: id, nome: nome, email: email, telefone: telefone },
    });
  }
}
