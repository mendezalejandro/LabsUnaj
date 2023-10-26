
/** Define los tipos de roles
 */
export const RolTypes = {
    /** Administrador de sistema */
    Sistema: 1,
    /** Administrador */
    Administrador: 2,
    /** Alumno */
    Alumno: 3
  } as const;
  export type Rol = typeof RolTypes[keyof typeof RolTypes];