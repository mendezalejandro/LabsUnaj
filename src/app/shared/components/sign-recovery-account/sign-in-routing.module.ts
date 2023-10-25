import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignRecoveryAccountComponent } from './sign-recovery-account.component';

const routes: Routes = [{ path: '', component: SignRecoveryAccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignRecoveryAccountRoutingModule { }
