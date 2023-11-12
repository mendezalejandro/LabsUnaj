import { Rol, RolTypes } from "./roles.model";

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
    esAdmin: boolean;
}

// Interfaz para representar la información de la sesion del usuario
export interface IUsuarioSesion {
    id: number;
    nombreUsuario: string;
    nombre: string;
    apellido: string;
    estado: boolean;
    rol: Rol;
    vencimiento: Date;
    tokenSesion: string;
}

// Interfaz para representar la información de un usuario
export interface IUsuarioActualizar {
    nombre: string | null;
    apellido: string | null;
    mail: string | null;
    telefono: string | null;
    registrado: boolean;
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
    rol: Rol = RolTypes.Administrador;
    esAdmin: boolean;
    constructor(
        id: number=0,
        nombre_usuario : string = '',
        contrasena: string = '',
        nombre: string = '',
        apellido: string = '',
        mail: string = '',
        telefono: string = '',
        estado: boolean= true,
        rol: Rol= RolTypes.Alumno,
        esAdmin: boolean = false
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
        this.esAdmin = esAdmin;
    }
}

// Clase basada en la interfaz IUsuarioActualizar
export class UsuarioActualizar implements IUsuarioActualizar {
    nombre: string | null;
    apellido: string | null;
    mail: string | null;
    telefono: string | null;
    registrado: boolean;
    constructor(
        nombre: string | null = null,
        apellido: string| null = null,
        mail: string| null = null,
        telefono: string| null = null,
        registrado: boolean = false
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.telefono = telefono;
        this.registrado = registrado;
    }
}