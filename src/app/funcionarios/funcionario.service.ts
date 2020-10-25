import { Funcionario } from "./funcionario.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class FuncionarioService {
  private funcionarios: Funcionario[] = [];
  private listaFuncionariosAtualizada = new Subject<Funcionario[]>();
  constructor(private httpClient: HttpClient) {}

  adicionarFuncionario(
    nome: string,
    email: string,
    telefone: string,
    senha: string
  ) {
    const funcionario: Funcionario = {
      id: null,
      nome: nome,
      email: email,
      telefone: telefone,
      senha: senha,
      tipoUsuario: "funcionario",
    };
    this.funcionarios.push(funcionario);
    this.listaFuncionariosAtualizada.next([...this.funcionarios]);
    this.httpClient
      .post<{ mensagem: string; id: string }>(
        "http://localhost:3000/api/funcionarios",
        funcionario
      )
      .subscribe((dados) => {
        funcionario.id = dados.id;
        this.funcionarios.push(funcionario);
        this.listaFuncionariosAtualizada.next([...this.funcionarios]);
      });
  }

  getListaDeFuncionariosAtualizadaObservable() {
    return this.listaFuncionariosAtualizada.asObservable();
  }
  getFuncionarios(): void {
    this.httpClient
      .get<{ mensagem: string; funcionarios: any }>(
        "http://localhost:3000/api/funcionarios"
      )
      .pipe(
        map((dados) => {
          return dados.funcionarios.map((funcionario) => {
            return {
              id: funcionario._id,
              nome: funcionario.nome,
              email: funcionario.email,
              telefone: funcionario.telefone,
            };
          });
        })
      )
      .subscribe((funcionarios) => {
        this.funcionarios = funcionarios;
        this.listaFuncionariosAtualizada.next([...this.funcionarios]);
      });
  }
  getFuncionario(id: string) {
    return this.httpClient.get<{
      _id: string;
      nome: string;
      email: string;
      telefone: string;
    }>(`http://localhost:3000/api/funcionarios/${id}`);
  }

  removerFuncionario(id: string): void {
    this.httpClient
      .delete(`http://localhost:3000/api/funcionarios/${id}`)
      .subscribe(() => {
        this.funcionarios = this.funcionarios.filter((func) => {
          return func.id !== id;
        });
        this.listaFuncionariosAtualizada.next([...this.funcionarios]);
        console.log(`Funcionario de id: ${id} removido`);
      });
  }
  atualizarFuncionario(
    id: string,
    nome: string,
    email: string,
    telefone: string
  ) {
    const funcionario: any = { id, nome, email, telefone };
    this.httpClient
      .put(`http://localhost:3000/api/funcionarios/${id}`, funcionario)
      .subscribe((res) => {
        const copia = [...this.funcionarios];
        const indice = copia.findIndex((cli) => cli.id === funcionario.id);
        copia[indice] = funcionario;
        this.funcionarios = copia;
        this.listaFuncionariosAtualizada.next([...this.funcionarios]);
      });
  }
}
