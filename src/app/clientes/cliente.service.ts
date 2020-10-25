import { Cliente } from "./cliente.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ClienteService {
  private clientes: Cliente[] = [];
  private listaClientesAtualizada = new Subject<Cliente[]>();
  constructor(private httpClient: HttpClient) {}

  adicionarCliente(
    nome: string,
    email: string,
    cpf: string,
    telefone: string,
    senha: string
  ) {
    const cliente: Cliente = {
      id: null,
      nome: nome,
      email: email,
      cpf: cpf,
      telefone: telefone,
      senha: senha,
      tipoUsuario: "cliente",
    };
    this.clientes.push(cliente);
    this.listaClientesAtualizada.next([...this.clientes]);
    this.httpClient
      .post<{ mensagem: string; id: string }>(
        "http://localhost:3000/api/clientes",
        cliente
      )
      .subscribe((dados) => {
        cliente.id = dados.id;
        this.clientes.push(cliente);
        this.listaClientesAtualizada.next([...this.clientes]);
      });
  }

  getListaDeClientesAtualizadaObservable() {
    return this.listaClientesAtualizada.asObservable();
  }
  getClientes(): void {
    this.httpClient
      .get<{ mensagem: string; clientes: any }>(
        "http://localhost:3000/api/clientes"
      )
      .pipe(
        map((dados) => {
          return dados.clientes.map((cliente) => {
            return {
              id: cliente._id,
              nome: cliente.nome,
              cpf: cliente.cpf,
              email: cliente.email,
              telefone: cliente.telefone,
            };
          });
        })
      )
      .subscribe((clientes) => {
        this.clientes = clientes;
        this.listaClientesAtualizada.next([...this.clientes]);
      });
  }
  getCliente(id: string) {
    //return { ...this.clientes.find((cli) => cli.id === idCliente) };
    return this.httpClient.get<{
      _id: string;
      nome: string;
      fone: string;
      email: string;
    }>(`http://localhost:3000/api/clientes/${id}`);
  }

  removerCliente(id: string): void {
    this.httpClient
      .delete(`http://localhost:3000/api/clientes/${id}`)
      .subscribe(() => {
        this.clientes = this.clientes.filter((cli) => {
          return cli.id !== id;
        });
        this.listaClientesAtualizada.next([...this.clientes]);
        console.log(`Cliente de id: ${id} removido`);
      });
  }
  atualizarCliente(
    id: string,
    nome: string,
    email: string,
    cpf: string,
    telefone: string
  ) {
    const cliente: any = { id, nome, email, cpf, telefone };
    this.httpClient
      .put(`http://localhost:3000/api/clientes/${id}`, cliente)
      .subscribe((res) => {
        const copia = [...this.clientes];
        const indice = copia.findIndex((cli) => cli.id === cliente.id);
        copia[indice] = cliente;
        this.clientes = copia;
        this.listaClientesAtualizada.next([...this.clientes]);
      });
  }
}
