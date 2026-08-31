export type TipoCliente = 'cliente_final' | 'revendedor' | 'empresa';

export interface Cliente {
  id: string;
  nombre: string;
  tipo_cliente: TipoCliente;
  dni?: string | null;
  cuit?: string | null;
  direccion?: string | null;
  telefono?: string | null;
  telefono_whatsapp?: string | null;
  email?: string | null;
  activo: boolean;

  // Los cuatro campos de abajo son columnas reales de la tabla clientes,
  // pero no las devuelve todo endpoint (el bot, por ejemplo, pide un
  // select acotado), por eso son opcionales.

  // Se le entrega en el dia aunque haya pasado el horario de corte. Solo
  // lo marca un admin (ver ClientesService.marcarImportante).
  es_importante?: boolean;
  tiene_cuenta_corriente?: boolean;
  // false = lo dio de alta el bot en una primera compra y todavia nadie
  // de la oficina reviso los datos (el nombre puede venir mal escrito, y
  // si vino de un audio encima paso por una transcripcion).
  confirmado?: boolean;
  // Avisos sueltos sobre el cliente, tipo "falta completar DNI/CUIT para
  // facturar". Las escribe el backend al darlo de alta desde la web.
  notas?: string | null;
}
