import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ILaboratorio } from 'src/app/shared/models/laboratorio.model';
import { mockLaboratorios } from 'src/app/storybook/mocks/laboratorios.mock';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UsuariosComponent {
  dataSource = mockLaboratorios;
  columnsToDisplay = ['id','nombre', 'titulo', 'disponible', 'estado', 'acciones'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay];
  expandedElement!: ILaboratorio | null;
}

