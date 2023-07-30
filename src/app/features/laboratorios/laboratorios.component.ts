import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { mockLaboratorios } from 'src/app/storybook/mocks/laboratorios.mock';


@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrls: ['./laboratorios.component.scss']
})
export class LaboratoriosComponent {
  isMobile!: Observable<boolean>;
  displayedColumns: string[] = ['id','imagen', 'nombre', 'disponible', 'estado', 'acciones'];
  dataSource = mockLaboratorios;
  constructor(breakpointObserver: BreakpointObserver) { 
    this.isMobile = breakpointObserver
    .observe('(max-width: 728px)')
    .pipe(map(({matches}) => (matches)));
  }
}
