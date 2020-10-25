import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject, OnInit } from "@angular/core";
import { FuncionarioService } from "../../funcionario.service";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Funcionario } from "../../funcionario.model";

@Component({
  selector: "app-edit.dialog",
  templateUrl: "./edit.dialog.html",
  styleUrls: ["./edit.dialog.css"],
})
export class EditDialogFuncionarioComponent implements OnInit {
  form: FormGroup;
  public funcionario: Funcionario;
  constructor(
    public funcionarioService: FuncionarioService,
    public dialogRef: MatDialogRef<EditDialogFuncionarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmEdit(id: string): void {
    this.funcionarioService.atualizarFuncionario(
      id,
      this.form.value.nome,
      this.form.value.email,
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
      telefone: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(14)],
      }),
    });

    this.form.patchValue({
      nome: this.data.nome,
      email: this.data.email,
      telefone: this.data.telefone,
    });
  }
}
