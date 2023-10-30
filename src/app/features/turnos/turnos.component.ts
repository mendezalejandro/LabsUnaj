import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription, map, finalize } from 'rxjs';
import { BusyService } from 'src/app/core/services/busy.service';
import { ITurnoBusqueda, ITurnoData } from 'src/app/shared/models/turno.model';
import { TurnoService } from 'src/app/shared/services/turno.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TurnosBusquedaAvanzadaComponent } from './turnos-busqueda-avanzada/turnos-busqueda-avanzada.component';
import { CancelarTurnoComponent } from '../dashboard/cancelar-turno/cancelar-turno.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  /* observable para detectar el tamaño de la pantalla */
  isMobile!: Observable<boolean>;
  /* columnas de la tabla */
  displayedColumns: string[] = ['id', 'laboratorio', 'alumno', 'fecha','disponible', 'acciones'];
  /* datos de la tabla */
  dataSource!: MatTableDataSource<ITurnoData>;
  /* filtro para la tabla */
  filterValue!: string;
  /* suscripcion a los datos */
  dataSuscription!: Subscription;
  /* suscripcion a las operaciones */
  operSuscription!: Subscription;
  /* procesando datos */
  processing: boolean = false;
  /**
   * constructor
   * @param breakpointObserver inyectado para detectar el tamaño de la pantalla
   * @param turnoService inyectado para el servicio de turnos
   * @param busyService inyectado para el servicio de cargando
   * @param dialog inyectado para el servicio de dialogos
   */
  constructor(
    breakpointObserver: BreakpointObserver,
    private turnoService: TurnoService,
    private busyService: BusyService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) {
    this.isMobile = breakpointObserver
      .observe('(max-width: 728px)')
      .pipe(map(({ matches }) => (matches)))
  }

  //#region eventos del componente
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  /* destruccion */
  ngOnDestroy(): void {
    if (this.dataSuscription) this.dataSuscription.unsubscribe();
    if (this.operSuscription) this.operSuscription.unsubscribe();
  }
  /* inicializacion */
  ngOnInit(): void {
    this.busyService.showProcessing();
    this.dataSuscription = this.turnoService.getTurnos()
      .pipe(finalize(() => {
        this.busyService.hideProcessing();
      }))
      .subscribe(turnos => {
        this.dataSource = new MatTableDataSource(turnos);
      });
  }
  //#endregion

  //#region metodos de la tabla

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //#endregion

  //#region operaciones

  /**
   * muestra el formulario para buscar turnos
   */
  showSearch() {
    const dialog =  this.dialog.open(TurnosBusquedaAvanzadaComponent, {
      width: '480px',
    });

    dialog.afterClosed().subscribe(parametros => {
      if (parametros) {
        this.buscar(parametros);
      }
    });
  }
  /**
   * realiza la busqueda de los turnos
   * @param parametros parametros de busqueda
   */
  buscar(parametros: ITurnoBusqueda){
    this.turnoService.getTurnos()
      .subscribe(turnos => {
        this.dataSource = new MatTableDataSource(turnos);
      });
  }
  cancelarTurno(idTurno: number) {
    const dialogRef = this.dialog.open(CancelarTurnoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.turnoService.cancelarTurno(idTurno).subscribe(
          () => {
            this.snackBar.open(this.translateService.instant('features.dashboard.turno-cancelado'));
          }
        );
      }
    });
  }
  //#endregion
}
