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
}
