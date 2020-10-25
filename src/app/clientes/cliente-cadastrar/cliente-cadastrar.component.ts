import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ClienteService } from "../cliente.service";

@Component({
  selector: "app-cliente-cadastrar",
  templateUrl: "./cliente-cadastrar.component.html",
  styleUrls: ["./cliente-cadastrar.component.css"],
})
export class ClienteCadastrarComponent implements OnInit {
  constructor(private clienteService: ClienteService) {}

  onAdicionarCliente(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const cliente: any = {
      nome: form.value.nome,
      email: form.value.email,
      cpf: form.value.cpf,
      telefone: form.value.telefone,
      senha: form.value.senha,
    };

    this.clienteService.adicionarCliente(
      form.value.nome,
      form.value.email,
      form.value.cpf,
      form.value.telefone,
      form.value.senha
    );
    form.reset();
  }
  ngOnInit() {}
}
