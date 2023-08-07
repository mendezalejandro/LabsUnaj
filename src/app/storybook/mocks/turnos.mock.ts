import { ITurno, Turno } from "src/app/shared/models/turno.model";

// Mock de una lista de turnos
export const mockTurnos: ITurno[] = [
    new Turno(1, '08:00', '09:00', 60, new Date('2023-08-06'), 1, 'token1', '2023-08-06T12:00:00', 1),
    new Turno(2, '09:00', '10:00', 60, new Date('2023-08-07'), 2, 'token2', '2023-08-07T12:00:00', 2),
    new Turno(3, '10:00', '11:00', 60, new Date('2023-08-08'), 3, 'token3', '2023-08-08T12:00:00', 3),
    // Agrega más datos de turnos aquí...
  ];
  
  // Mock de un turno
  export const mockTurno: ITurno = new Turno(
    1,
    '08:00',
    '09:00',
    60,
    new Date('2023-08-06'),
    1,
    'token1',
    '2023-08-06T12:00:00',
    1
  );