import { IUsuario, Usuario } from "src/app/shared/models/usuario.model";

// Mock de 5 registros de usuarios
export const mockUsuarios: IUsuario[] = [
    new Usuario(1, 'user1', 'password1', 'John', 'Doe', 'admin@unaj.com','1111111', true,  'admin'),
    new Usuario(2, 'user2', 'password2', 'Jane', 'Smith', 'user2@unaj.com','2', true, 'alumno'),
    new Usuario(3, 'user3', 'password3', 'Bob', 'Johnson','user3@unaj.com','435453',  true,'alumno'),
    new Usuario(4, 'user4', 'password4', 'Alice', 'Brown', 'user4@unaj.com','231231432', false,'alumno'),
    new Usuario(5, 'user5', 'password5', 'Mike', 'Lee', 'user5@unaj.com','432543', true,'alumno'),
  ];
  
  // Mock de un registro de usuario
  export const mockUsuario: IUsuario = new Usuario(1, 'user1', 'password1', 'John', 'Doe', 'admin@unaj.com','1111111', true,'admin');
  