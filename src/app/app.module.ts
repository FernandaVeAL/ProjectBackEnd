import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClienteService } from './clientes/cliente.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule} from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

import { FuncionarioCadastrarComponent } from './funcionarios/funcionario-cadastrar/funcionario-cadastrar.component';
import { FuncionarioConsultarComponent } from './funcionarios/funcionario-consultar/funcionario-consultar.component';
import { ClienteCadastrarComponent } from './clientes/cliente-cadastrar/cliente-cadastrar.component';
import { ClienteConsultarComponent } from './clientes/cliente-consultar/cliente-consultar.component';

import { CabecalhoAdmComponent } from './cabecalho-adm/cabecalho-adm.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

import { EmailComponent } from './contato/email/email.component';

import { ObraSolicitarComponent } from './obras/obra-solicitar/obra-solicitar.component';
import { ObraCadastrarComponent } from './obras/obra-cadastrar/obra-cadastrar.component';
import { ObraFunConsultarComponent } from './obras/obra-fun-consultar/obra-fun-consultar.component';
import { DeleteDialogComponent } from './clientes/dialogs/delete/delete.dialog.component';
import { EditDialogComponent } from './clientes/dialogs/edit/edit.dialog.component';

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
    ObraFunConsultarComponent
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
    HttpClientModule,
    MatDialogModule,
    MatPaginatorModule,
  ],
  entryComponents: [
    EditDialogComponent,
    DeleteDialogComponent
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
