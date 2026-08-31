// A proposito este archivo NO reexporta nada.
//
// Si aca pusieramos `export * from './cliente'` y demas, cualquier pagina
// que necesitara UN tipo terminaria dependiendo de los 38 — que es
// exactamente el cuello de botella que este paquete vino a desarmar
// (survida-panel/lib/types.ts tenia 106 conexiones entrantes).
//
// Importa siempre del pedazo que necesitas:
//
//   import type { Pedido } from '@survida/dominio/pedido';
//   import type { Cliente } from '@survida/dominio/cliente';
//
// y NO:
//
//   import type { Pedido } from '@survida/dominio';
export {};
