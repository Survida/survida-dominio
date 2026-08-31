export interface Producto {
  id: string;
  nombre: string;
  costo_unitario: number;
  activo: boolean;
}

export type Modalidad = 'venta_directa' | 'revendedor' | 'empresa';

export interface ListaPrecio {
  id: string;
  producto_id: string;
  modalidad: Modalidad;
  precio: number;
  productos?: { nombre: string };
}

export interface Lote {
  id: string;
  producto_id: string;
  codigo_lote?: string | null;
  fecha_ingreso: string;
  fecha_vencimiento?: string | null;
  cantidad_ingresada: number;
  cantidad_actual: number;
  productos?: { nombre: string };
}
