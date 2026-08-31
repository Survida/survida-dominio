export interface MovimientoCtaCte {
  id: string;
  cliente_id: string;
  fecha: string;
  tipo: 'cargo' | 'pago';
  monto: number;
  concepto: string;
}

export interface StockAdeudado {
  id: string;
  cliente_id: string;
  producto_id: string;
  cantidad: number;
  monto_adeudado: number;
  fecha: string;
  saldado: boolean;
  productos?: { nombre: string };
}

export interface Gasto {
  id: string;
  fecha: string;
  categoria: string;
  descripcion?: string | null;
  comprobante_url?: string | null;
  monto: number;
}

export interface Factura {
  id: string;
  pedido_id: string;
  cliente_id: string;
  tipo_comprobante: 'A' | 'B' | 'C';
  numero?: string | null;
  fecha: string;
  subtotal: number;
  total: number;
  cae_afip?: string | null;
  estado: 'borrador' | 'emitida' | 'anulada';
  clientes?: { nombre: string };
}

export interface AbonoItem {
  id: string;
  producto_id: string;
  cantidad: number;
  productos?: { nombre: string };
}

export interface Abono {
  id: string;
  nombre: string;
  periodicidad: 'semanal' | 'quincenal' | 'mensual';
  precio_real: number;
  descuento_pct: number;
  precio_abono: number;
  activo: boolean;
  abono_items?: AbonoItem[];
}

export type EstadoClienteAbono = 'activo' | 'pausado' | 'cancelado';

export interface ClienteAbono {
  id: string;
  cliente_id: string;
  abono_id: string;
  fecha_inicio: string;
  fecha_proximo_cobro: string;
  estado: EstadoClienteAbono;
  clientes?: { nombre: string; telefono?: string | null };
  abonos?: { nombre: string; precio_abono: number; periodicidad: string };
}
