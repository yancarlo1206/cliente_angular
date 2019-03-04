import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DirectivaComponent } from './directiva/directiva.component';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { RoleGuardService } from './auth/role-guard.service';

//const routes: Routes = [];

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent, canActivate: [AuthGuard]},
  {path: 'clientes',
    component: ClientesComponent,
    canActivate: [RoleGuardService],
      data: {
        expectedRole: 'admin'
      }
  },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
