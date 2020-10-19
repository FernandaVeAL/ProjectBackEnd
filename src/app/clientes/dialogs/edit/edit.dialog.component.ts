import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject, OnInit } from "@angular/core";
import { ClienteService } from "../../cliente.service";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Cliente } from "../../cliente.model";

@Component({
  selector: "app-edit.dialog",
  templateUrl: "./edit.dialog.html",
  styleUrls: ["./edit.dialog.css"],
})
export class EditDialogComponent implements OnInit {
  hide = true;
  form: FormGroup;
  public cliente: Cliente;
  constructor(
    public clienteService: ClienteService,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmEdit(id: string): void {
    this.clienteService.atualizarCliente(
      id,
      this.form.value.nome,
      this.form.value.email,
      this.form.value.cpf,
      this.form.value.telefone
    );
    this.dialogRef.close();
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

    this.form.patchValue({
      nome: this.data.nome,
      email: this.data.email,
      cpf: this.data.cpf,
      telefone: this.data.telefone,
    });
  }
}
