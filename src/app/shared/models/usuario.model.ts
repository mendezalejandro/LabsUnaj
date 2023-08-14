// Interfaz para representar la información de un usuario
export interface IUsuario {
    id: number;
    nombre_usuario: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    mail: string;
    telefono: string;
    estado: boolean;
    id_rol: string;
}

// Clase basada en la interfaz IUsuario
export class Usuario implements IUsuario {
    id: number;
    nombre_usuario: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    mail: string;
    telefono: string;
    estado: boolean;
    id_rol: string = 'admin';

    constructor(
        id: number = 0,
        nombre_usuario : string = '',
        contrasena: string = '',
        nombre: string = '',
        apellido: string = '',
        mail: string = '',
        telefono: string = '',
        estado: boolean= true,
        id_rol: 'admin' | 'alumno' = 'admin'
    ) {
        this.id = id;
        this.nombre_usuario = nombre_usuario;
        this.contrasena = contrasena;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.telefono = telefono;
        this.estado = estado,
        this.id_rol = id_rol;
    }
}
