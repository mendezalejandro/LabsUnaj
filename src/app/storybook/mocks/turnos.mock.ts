import { ITurno, Turno } from "src/app/shared/models/turno.model";

// Mock de una lista de turnos
export const mockTurnos: ITurno[] = [
    new Turno(1, '08:00', '09:00', 1, 'token1', 1,true),
    new Turno(2, '09:00', '10:00', 2, 'token2', 2,false),
    new Turno(3, '10:00', '11:00', 3, 'token3', 3,true),
    // Agrega más datos de turnos aquí...
  ];
  
  // Mock de un turno
  export const mockTurno: ITurno = new Turno(
    1,
    '08:00',
    '09:00',
    1,
    'token1',
    1,
    true
  );