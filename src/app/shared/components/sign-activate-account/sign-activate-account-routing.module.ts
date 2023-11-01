import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignActivateAccountComponent } from './sign-activate-account.component';

const routes: Routes = [{ path: '', component: SignActivateAccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignActivateAccountRoutingModule { }
