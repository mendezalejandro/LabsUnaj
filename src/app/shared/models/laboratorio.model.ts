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
    configuracion: ILaboratorioConfiguracion;
}

/**
 * Modelo de datos para la configuracion de laboratorios
 */
export interface ILaboratorioConfiguracion {
    duracion: number;
    horarioInicial: number;
    horarioFinal: number;
    cantidad: number;
    dias: ILaboratorioConfiguracionDias;
}

/**
 * Modelo de datos para la configuracion de días de los laboratorios
 */
export interface ILaboratorioConfiguracionDias {
    lunes: boolean;
    martes: boolean;
    miercoles: boolean;
    jueves: boolean;
    viernes: boolean;
    sabado: boolean;
    domingo: boolean;
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
    configuracion: ILaboratorioConfiguracion;
    constructor(
        id?: number,
        nombre?: string,
        titulo?: string,
        url?: string | null,
        imagen?: string | null,
        descripcion?: string | null,
        disponible: boolean = false,
        estado: boolean = false,
        configuracion: ILaboratorioConfiguracion = new LaboratorioConfiguracion()
    ) {
        this.id = id || 0;
        this.nombre = nombre || '';
        this.titulo = titulo || '';
        this.url = url || null;
        this.imagen = imagen || null;
        this.descripcion = descripcion || null;
        this.disponible = disponible;
        this.estado = estado;
        this.configuracion = configuracion;
    }
}

/**
 * Clase para el modelo de datos de LaboratorioConfiguracion
 */
export class LaboratorioConfiguracion{
    duracion: number;
    horarioInicial: number;
    horarioFinal: number;
    cantidad: number;
    dias: ILaboratorioConfiguracionDias;
    constructor(
    ) {
        this.duracion = 60;
        this.horarioInicial = 9;
        this.horarioFinal = 18;
        this.cantidad = 1;
        this.dias = new LaboratorioConfiguracionDias();
    }
}

/**
 * Clase para el modelo de datos de LaboratorioConfiguracionDias
 */
export class LaboratorioConfiguracionDias implements ILaboratorioConfiguracionDias {
    lunes: boolean;
    martes: boolean;
    miercoles: boolean;
    jueves: boolean;
    viernes: boolean;
    sabado: boolean;
    domingo: boolean;
    constructor(
    ) {
        this.lunes = true;
        this.martes = true;
        this.miercoles = true;
        this.jueves = true;
        this.viernes = true;
        this.sabado = false;
        this.domingo = false;
    }
}