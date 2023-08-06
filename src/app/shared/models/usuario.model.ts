// Interfaz para representar la información de un usuario
export interface IUsuario {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    status: boolean;
    rol: string;
}

// Clase basada en la interfaz IUsuario
export class Usuario implements IUsuario {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    status: boolean;
    rol: string = 'admin';

    constructor(
        id: number = 0,
        username: string = '',
        password: string = '',
        firstname: string = '',
        lastname: string = '',
        email: string = '',
        phone: string = '',
        status: boolean= true,
        rol: 'admin' | 'alumno' = 'admin'
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.status = status,
        this.rol = rol;
    }
}
