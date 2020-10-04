import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { LoginComponent } from './login/login.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

import { FuncionarioCadastrarComponent } from './funcionarios/funcionario-cadastrar/funcionario-cadastrar.component';
import { ClienteCadastrarComponent } from './clientes/cliente-cadastrar/cliente-cadastrar.component';
import { CabecalhoAdmComponent } from './cabecalho-adm/cabecalho-adm.component';

import { AppRoutingModule } from './app-routing.module';
import {MatTableModule} from '@angular/material/table';
import { ObraSolicitarComponent } from './obras/obra-solicitar/obra-solicitar.component';
import { EmailComponent } from './contato/email/email.component';
import { FuncionarioConsultarComponent } from './funcionarios/funcionario-consultar/funcionario-consultar.component';
import { ClienteConsultarComponent } from './clientes/cliente-consultar/cliente-consultar.component';
import { ObraCadastrarComponent } from './obras/obra-cadastrar/obra-cadastrar.component';
import { ObraFunConsultarComponent } from './obras/obra-fun-consultar/obra-fun-consultar.component';
import {MatTabsModule} from '@angular/material/tabs';

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
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
