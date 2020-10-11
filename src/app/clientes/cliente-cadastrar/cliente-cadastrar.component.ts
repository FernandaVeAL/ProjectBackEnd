import { Component} from "@angular/core";
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: "app-cliente-cadastrar",
  templateUrl: "./cliente-cadastrar.component.html",
  styleUrls: ["./cliente-cadastrar.component.css"],
})
export class ClienteCadastrarComponent {
  constructor(public clienteService: ClienteService) {}
  onAdicionarCliente(form:NgForm) {
    if (form.invalid) {
      return;
      }
      
      this.clienteService.adicionarCliente(
        form.value.nome,
        form.value.email,
        form.value.cpf,
        form.value.telefone,
        form.value.senha
        );
        form.resetForm();
  }
  
}
