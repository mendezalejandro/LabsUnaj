// interfaz ITurno
export interface ITurno {
    id: number;
    time_start: string;
    time_end: string;
    duration: number;
    date: Date;
    id_usuario: number;
    token: string;
    date_set: string;
    id_laboratorio: number;
  }

  // clase Turno
export class Turno implements ITurno {
    constructor(
      public id: number = 0,
      public time_start: string = '',
      public time_end: string = '',
      public duration: number = 0,
      public date: Date = new Date(),
      public id_usuario: number = 0,
      public token: string = '',
      public date_set: string = '',
      public id_laboratorio: number = 0
    ) {}
  }