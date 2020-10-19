import { Component, OnInit } from "@angular/core";
import { Cliente } from "../clientes/cliente.model";
import { LoginService } from "./login.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  public user: Cliente;

  constructor(private loginService: LoginService) {}

  onLogin(form: NgForm) {
    this.loginService.getLogin(form.value.email, form.value.senha);
  }
}
