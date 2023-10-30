// interfaz ITurno
export interface ITurno {
    id: number;
    fecha_inicio: string;
    fecha_fin: string;
    id_usuario: number;
    token: string;
    id_laboratorio: number;
    disponible:boolean;
  }

  // interfaz ITurnoData
export interface ITurnoData {
  id: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  idUsuario: number;
  nombreUsuario: string;
  apellidoUsuario: string;
  nombreLaboratorio: string;
  tituloLaboratorio: string;
  disponible:boolean;
}

  // interfaz ITurnoBusqueda
export interface ITurnoBusqueda {
  disponible:boolean;
  fecha_inicio: Date;
  fecha_fin: Date;
  idUsuario: number;
  idLaboratorio: number;
}


  // interfaz ITurnoConfirmacion
  export interface ITurnoConfirmacion {
    fechaInicio: string;
    idUsuario: number;
    idLaboratorio: number;
  }

  // interfaz IDisponibilidad
export interface IDisponibilidad {
  horario: string;
  disponible: boolean;
}
  // interfaz ITurnosVigentes
  export interface ITurnoVigente {
    idTurno: number;
    fechaInicio: Date;
    fechaFin: Date;
    idUsuario: number;
    idLaboratorio: number;
    nombreLaboratorio: string;
    tituloLaboratorio: string;
  }


  // clase Turno
export class Turno implements ITurno {
    constructor(
      public id: number = 0,
      public fecha_inicio: string = '',
      public fecha_fin: string = '',
      public id_usuario: number = 0,
      public token: string = '',
      public id_laboratorio: number = 0,
      public disponible:boolean = true
    ) {}
}

  // clase Turno Confirmacion
  export class TurnoConfirmacion implements ITurnoConfirmacion {
    constructor(
      public fechaInicio: string = '',
      public idUsuario: number = 0,
      public idLaboratorio: number = 0
    ) {}
}


  // clase TurnoBusqueda
  export class TurnoBusqueda implements ITurnoBusqueda {
    constructor(
      public disponible:boolean = true,
      public fecha_inicio: Date = new Date(),
      public fecha_fin: Date = new Date(new Date().setDate(new Date().getDate() + 1)),
      public idUsuario: number = 0,
      public idLaboratorio: number = 0,
    ) {}
  }