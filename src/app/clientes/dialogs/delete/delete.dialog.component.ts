import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { ClienteService } from "../../cliente.service";

@Component({
  selector: "app-delete.dialog",
  templateUrl: "./delete.dialog.html",
  styleUrls: ["./delete.dialog.css"],
})
export class DeleteDialogComponent {
  constructor(
    public clienteService: ClienteService,
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: ClienteService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(id: string): void {
    this.clienteService.removerCliente(id);
    this.dialogRef.close();
  }
}
