import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';
import { ILaboratorio, Laboratorio } from 'src/app/shared/models/laboratorio.model';
import { mockLaboratorio, mockLaboratorios } from 'src/app/storybook/mocks/laboratorios.mock';


@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrls: ['./laboratorios.component.scss']
})
export class LaboratoriosComponent implements OnInit {
  isMobile!: Observable<boolean>;
  displayedColumns: string[] = ['id', 'imagen', 'nombre', 'disponible', 'estado', 'acciones'];
  dataSource = mockLaboratorios;
  filterValue!: string;
  filteredDataSource!: ILaboratorio[];
  events: string[] = [];
  opened!: boolean;
  laboratorio: ILaboratorio = mockLaboratorio;
  oper: 'edit' | 'add' | 'delete' | 'view' = 'view';
  formTitle: string = 'Laboratorio';

  constructor(breakpointObserver: BreakpointObserver, private translateService: TranslateService, private snackBar: MatSnackBar) {
    this.isMobile = breakpointObserver
      .observe('(max-width: 728px)')
      .pipe(map(({ matches }) => (matches)))
  }

  ngOnInit(): void {
    this.filteredDataSource = [...this.dataSource];
  }

  filter(value: string) {
    this.filteredDataSource = this.dataSource.filter(laboratorio =>
      laboratorio.nombre.toLowerCase().includes(value.toLowerCase())
      || laboratorio.descripcion?.toLowerCase().includes(value.toLowerCase())
      || laboratorio.titulo.toLowerCase().includes(value.toLowerCase())
    );
  }

  view(item: ILaboratorio) {
    this.oper = 'view';
    this.laboratorio = { ...item };
    this.showForm();
  }

  edit(item: ILaboratorio) {
    this.oper = 'edit';
    this.laboratorio = { ...item };
    this.showForm();
  }

  add() {
    this.oper = 'add';
    this.laboratorio = new Laboratorio();
    this.showForm();
  }
  changeAvailable(item: ILaboratorio) {
    item.disponible = !item.disponible;
  }
  changeStatus(item: ILaboratorio) {
    item.estado = !item.estado;
  }
  delete(item: ILaboratorio) {
    const index = this.filteredDataSource.findIndex(laboratorio => laboratorio.id === item.id);
    this.filteredDataSource.splice(index, 1);
  }
  confirm() {
    switch (this.oper) {
      case 'add': {
        this.dataSource = [...this.dataSource, this.laboratorio];
        this.filter('');
        this.snackBar.open(this.translateService.instant('features.laboratorios.mensajes.add-success'));
      } break;
      case 'edit': {
        const index = this.filteredDataSource.findIndex(laboratorio => laboratorio.id === this.laboratorio.id);
        const item = this.filteredDataSource[index];
        Object.keys(this.laboratorio).forEach(element => { Object(item)[element] = Object(this.laboratorio)[element]; });
        this.snackBar.open(this.translateService.instant('features.laboratorios.mensajes.edit-success'));
      } break;
      case 'view': break;
      default: { throw new Error("Not implemented operation") }
    }
    this.hideForm();
  }
  cancel() {
    this.hideForm();
  }

  setFormTitle() {
    switch (this.oper) {
      case 'add': {
        this.formTitle = this.translateService.instant('features.laboratorios.form.add');
      } break;
      case 'edit': {
        this.formTitle = this.translateService.instant('features.laboratorios.form.edit');
      } break;
      case 'view': {
        this.formTitle = this.translateService.instant('features.laboratorios.form.view');
      } break;
      default: { throw new Error("Not implemented operation") }
    }
  }

  showForm() {
    this.setFormTitle();
    this.opened = true;
  }
  hideForm() {
    this.opened = false;
  }
}
