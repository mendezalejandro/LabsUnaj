import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userIsLogged = true;
  title = 'UNAJ Labs';
  isDarkTheme = false; // Puedes ajustar esta variable según tus necesidades para alternar entre el tema light y dark

  constructor() {}

  openLogout(){}
  openLogin(){}
}
