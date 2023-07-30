/**
 * Modelo de datos para Laboratorio
 */
export interface ILaboratorio {
    id: number;
    nombre: string;
    titulo: string;
    url?: string | null;
    imagen?: string | null;
    descripcion?: string | null;
    disponible: boolean;
    estado: boolean;
}

/**
 * Clase para el modelo de datos de Laboratorio
 */
export class Laboratorio implements ILaboratorio {
    id: number;
    nombre: string;
    titulo: string;
    url?: string | null;
    imagen?: string | null;
    descripcion?: string | null;
    disponible: boolean;
    estado: boolean;

    constructor(
        id: number,
        nombre: string,
        titulo: string,
        url: string | null,
        imagen: string | null,
        descripcion: string | null,
        disponible: boolean,
        estado: boolean
    ) {
        this.id = id;
        this.nombre = nombre;
        this.titulo = titulo;
        this.url = url;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.disponible = disponible;
        this.estado = estado;
    }
}
