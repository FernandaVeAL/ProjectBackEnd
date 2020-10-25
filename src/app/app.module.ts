import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ClienteService } from "./clientes/cliente.service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LoginComponent } from "./login/login.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";

import { FuncionarioCadastrarComponent } from "./funcionarios/funcionario-cadastrar/funcionario-cadastrar.component";
import { FuncionarioConsultarComponent } from "./funcionarios/funcionario-consultar/funcionario-consultar.component";
import { ClienteCadastrarComponent } from "./clientes/cliente-cadastrar/cliente-cadastrar.component";
import { ClienteConsultarComponent } from "./clientes/cliente-consultar/cliente-consultar.component";

import { CabecalhoAdmComponent } from "./cabecalho-adm/cabecalho-adm.component";
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";

import { EmailComponent } from "./contato/email/email.component";

import { ObraSolicitarComponent } from "./obras/obra-solicitar/obra-solicitar.component";
import { ObraCadastrarComponent } from "./obras/obra-cadastrar/obra-cadastrar.component";
import { ObraFunConsultarComponent } from "./obras/obra-fun-consultar/obra-fun-consultar.component";
import { DeleteDialogClienteComponent } from "./clientes/dialogs/delete/delete.dialog.component";
import { EditDialogClienteComponent } from "./clientes/dialogs/edit/edit.dialog.component";
import { DeleteDialogFuncionarioComponent } from "./funcionarios/dialogs/delete/delete.dialog.component";
import { EditDialogFuncionarioComponent } from "./funcionarios/dialogs/edit/edit.dialog.component";
import { LoginService } from "./login/login.service";
import { FuncionarioService } from "./funcionarios/funcionario.service";

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    LoginComponent,
    FuncionarioCadastrarComponent,
    ClienteCadastrarComponent,
    CabecalhoAdmComponent,
    ObraSolicitarComponent,
    EmailComponent,
    FuncionarioConsultarComponent,
    ClienteConsultarComponent,
    ObraCadastrarComponent,
    ObraFunConsultarComponent,
    EditDialogClienteComponent,
    DeleteDialogClienteComponent,
    EditDialogFuncionarioComponent,
    DeleteDialogFuncionarioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    MatTableModule,
    MatListModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
  ],
  entryComponents: [
    EditDialogClienteComponent,
    DeleteDialogClienteComponent,
    EditDialogFuncionarioComponent,
    DeleteDialogFuncionarioComponent,
  ],
  providers: [ClienteService, LoginService, FuncionarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
