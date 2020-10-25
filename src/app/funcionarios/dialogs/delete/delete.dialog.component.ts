import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { FuncionarioService } from "../../funcionario.service";

@Component({
  selector: "app-delete.dialog",
  templateUrl: "./delete.dialog.html",
  styleUrls: ["./delete.dialog.css"],
})
export class DeleteDialogFuncionarioComponent {
  constructor(
    public funcionarioService: FuncionarioService,
    public dialogRef: MatDialogRef<DeleteDialogFuncionarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(id: string): void {
    this.funcionarioService.removerFuncionario(id);
    this.dialogRef.close();
  }
}
