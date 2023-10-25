import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-activate-account',
  templateUrl: './sign-activate-account.component.html',
  styleUrls: ['./sign-activate-account.component.scss']
})
export class SignActivateAccountComponent {
  constructor(private router: Router){}
    /**
     * regresa al login
     */
    toLogin(){
      this.router.navigate(['/sign-in']);
    }
}
