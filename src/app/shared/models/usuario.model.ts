import { Rol } from "./roles.model";

// Interfaz para representar la información de un usuario
export interface IUsuario {
    id: number;
    nombreUsuario: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    mail: string;
    telefono: string;
    estado: boolean;
    rol: Rol;
}

// Clase basada en la interfaz IUsuario
export class Usuario implements IUsuario {
    id: number;
    nombreUsuario: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    mail: string;
    telefono: string;
    estado: boolean;
    rol: Rol = Rol.Administrador;

    constructor(
        id: number=0,
        nombre_usuario : string = '',
        contrasena: string = '',
        nombre: string = '',
        apellido: string = '',
        mail: string = '',
        telefono: string = '',
        estado: boolean= true,
        rol: Rol= Rol.Administrador
    ) {
        this.id = id;
        this.nombreUsuario = nombre_usuario;
        this.contrasena = contrasena;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.telefono = telefono;
        this.estado = estado,
        this.rol = rol;
    }
}
