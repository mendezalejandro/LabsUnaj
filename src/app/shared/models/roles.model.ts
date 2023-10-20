
/** Define los tipos de roles
 */
export const RolTypes = {
    /** Administrador */
    Administrador: 1,
    /** Alumno */
    Alumno: 2
  } as const;
  export type Rol = typeof RolTypes[keyof typeof RolTypes];