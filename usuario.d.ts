// Quien esta usando la app, tal como lo devuelve GET /usuarios/me.
// El rol queda como string y no como union a proposito: los roles se
// definen del lado del backend (src/auth/roles.decorator.ts) y todavia
// pueden cambiar.
export interface PerfilUsuario {
  id: string;
  email: string;
  rol: string;
  nombre: string;
}
