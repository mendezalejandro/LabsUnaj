import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Observable, map, of, tap } from 'rxjs';
import { ILaboratorio } from 'src/app/shared/models/laboratorio.model';
import { mockLaboratorios } from 'src/app/storybook/mocks/laboratorios.mock';


@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrls: ['./laboratorios.component.scss']
})
export class LaboratoriosComponent implements OnInit {
  isMobile!: Observable<boolean>;
  displayedColumns: string[] = ['id','imagen', 'nombre', 'disponible', 'estado', 'acciones'];
  dataSource = mockLaboratorios;
  filterValue!: string;
  filteredDataSource!: ILaboratorio[];
  events: string[] = [];
  opened!: boolean;
  
  constructor(breakpointObserver: BreakpointObserver) { 
    this.isMobile = breakpointObserver
    .observe('(max-width: 728px)')
    .pipe(map(({matches}) => (matches)))
  }

  ngOnInit(): void {
    this.filteredDataSource = [...this.dataSource];
  }

  filter(value:string){
    this.filteredDataSource = this.dataSource.filter(laboratorio => 
      laboratorio.nombre.toLowerCase().includes(value.toLowerCase())
      || laboratorio.descripcion?.toLowerCase().includes(value.toLowerCase())
      || laboratorio.titulo.toLowerCase().includes(value.toLowerCase())
      );
  }
}
