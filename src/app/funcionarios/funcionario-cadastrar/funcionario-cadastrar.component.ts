import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FuncionarioService } from "../funcionario.service";

@Component({
  selector: "app-funcionario-cadastrar",
  templateUrl: "./funcionario-cadastrar.component.html",
  styleUrls: ["./funcionario-cadastrar.component.css"],
})
export class FuncionarioCadastrarComponent implements OnInit {
  constructor(private funcionarioService: FuncionarioService) {}

  onAdicionarFuncionario(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.funcionarioService.adicionarFuncionario(
      form.value.nome,
      form.value.email,
      form.value.telefone,
      form.value.senha
    );
    form.reset();
  }

  ngOnInit(): void {}
}
