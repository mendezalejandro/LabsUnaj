import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignChangePasswordComponent } from './sign-change-password.component';

const routes: Routes = [{ path: '', component: SignChangePasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignChangePasswordRoutingModule { }
