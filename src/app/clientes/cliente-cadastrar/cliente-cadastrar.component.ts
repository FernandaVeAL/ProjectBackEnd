import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Cliente } from "../cliente.model";
import { ClienteService } from "../cliente.service";

@Component({
  selector: "app-cliente-cadastrar",
  templateUrl: "./cliente-cadastrar.component.html",
  styleUrls: ["./cliente-cadastrar.component.css"],
})
export class ClienteCadastrarComponent implements OnInit {
  hide = true;
  form: FormGroup;
  public cliente: Cliente;
  constructor(public clienteService: ClienteService) {}

  onAdicionarCliente() {
    if (this.form.invalid) {
      return;
    }

    this.clienteService.adicionarCliente(
      this.form.value.nome,
      this.form.value.email,
      this.form.value.cpf,
      this.form.value.telefone,
      this.form.value.senha
    );
    this.form.reset();
  }
  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(4)],
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      cpf: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(14)],
      }),
      telefone: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(14)],
      }),
      senha: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });
    this.form.setValue({
      nome: this.cliente.nome,
      email: this.cliente.email,
      cpf: this.cliente.cpf,
      telefone: this.cliente.telefone,
      senha: this.cliente.senha,
    });
  }
}
