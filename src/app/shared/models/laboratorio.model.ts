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
 * Modelo de datos para la respuesta de Laboratorio
 */
export interface ILaboratorioResponse {
    objeto: ILaboratorio;
    mensaje: string;
    codigo: string;
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
        id?: number,
        nombre?: string,
        titulo?: string,
        url?: string | null,
        imagen?: string | null,
        descripcion?: string | null,
        disponible: boolean = false,
        estado: boolean = false
    ) {
        this.id = id || 0;
        this.nombre = nombre || '';
        this.titulo = titulo || '';
        this.url = url || null;
        this.imagen = imagen || null;
        this.descripcion = descripcion || null;
        this.disponible = disponible;
        this.estado = estado;
    }
}
