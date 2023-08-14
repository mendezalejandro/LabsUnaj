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