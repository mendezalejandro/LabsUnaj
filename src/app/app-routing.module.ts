import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { RolTypes } from './shared/models/roles.model';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', loadChildren: () => import('./shared/components/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'sign-up', loadChildren: () => import('./shared/components/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'recovery', loadChildren: () => import('./shared/components/sign-recovery-account/sign-recovery-account.module').then(m => m.SignRecoveryAccountModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard], data: {role: [RolTypes.Alumno ]}},
  { path: 'perfil', loadChildren: () => import('./features/perfil/perfil.module').then(m => m.PerfilModule), canActivate: [AuthGuard] },
  { path: 'usuarios', loadChildren: () => import('./features/usuarios/usuarios.module').then(m => m.UsuariosModule), canActivate: [AuthGuard] , data: {role: [RolTypes.Administrador]}},
  { path: 'laboratorios', loadChildren: () => import('./features/laboratorios/laboratorios.module').then(m => m.LaboratoriosModule), canActivate: [AuthGuard] , data: {role: [RolTypes.Administrador] } },
  { path: 'turnos', loadChildren: () => import('./features/turnos/turnos.module').then(m => m.TurnosModule), canActivate: [AuthGuard], data: {role: [RolTypes.Administrador] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
