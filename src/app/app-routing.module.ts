import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteCadastrarComponent } from './clientes/cliente-cadastrar/cliente-cadastrar.component';
import { LoginComponent } from './login/login.component';
import { ObraSolicitarComponent } from './obras/obra-solicitar/obra-solicitar.component';
import { EmailComponent } from './contato/email/email.component';

import { FuncionarioCadastrarComponent } from './funcionarios/funcionario-cadastrar/funcionario-cadastrar.component';
import { FuncionarioConsultarComponent } from './funcionarios/funcionario-consultar/funcionario-consultar.component';
import { ClienteConsultarComponent } from './clientes/cliente-consultar/cliente-consultar.component';
import { ObraCadastrarComponent } from './obras/obra-cadastrar/obra-cadastrar.component';
import { ObraFunConsultarComponent } from './obras/obra-fun-consultar/obra-fun-consultar.component';

const routes: Routes = [

  {path: 'ObraSolicitar', component: ObraSolicitarComponent},
  {path: 'ObraConsultar', component: ObraFunConsultarComponent},
  {path: 'Email', component: EmailComponent},
  {path: 'ClienteCadastrar', component: ClienteCadastrarComponent},
  {path: 'ClienteLogin', component: LoginComponent},
  {path: 'Funcionario/ObraCadastrar', component: ObraCadastrarComponent},
  {path: 'Funcionario/ObraConsultar', component: ObraFunConsultarComponent},
  {path: 'FuncionarioLogin', component: LoginComponent},
  {path: 'FuncionarioCadastrar', component: FuncionarioCadastrarComponent},
  {path: 'FuncionarioConsultar', component: FuncionarioConsultarComponent},
  {path: 'Funcionario/ClienteCadastrar', component: ClienteCadastrarComponent},
  {path: 'Funcionario/ClienteConsultar', component: ClienteConsultarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
