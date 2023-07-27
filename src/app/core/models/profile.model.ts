/**
 * interface que representa el perfil del usuario
 */
export interface IPerfil {
    theme: string;
    lang: string;
}

/**
 * clase que representa el perfil del usuario
*/
export class Perfil implements IPerfil {
    /** tema seleccionado por el usuario */
    public theme: string = 'light';
    /** idioma seleccionado por el usuario */
    public lang: string = 'es';
}