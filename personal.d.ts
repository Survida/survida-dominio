export interface Vendedor {
  id: string;
  cliente_id: string;
  zona?: string | null;
  comision_pct?: number | null;
  activo: boolean;
  clientes?: { nombre: string; telefono?: string | null };
}

export interface ResumenVendedor {
  vendedor_id: string;
  total_entregado: number;
  total_generado: number;
  total_pagado: number;
  saldo_pendiente: number;
}

export interface MovimientoVendedor {
  id: string;
  vendedor_id: string;
  producto_id?: string | null;
  tipo: 'entregado' | 'generado' | 'pagado';
  cantidad?: number | null;
  monto: number;
  fecha: string;
  productos?: { nombre: string };
}

export interface Empleado {
  id: string;
  nombre: string;
  dni?: string | null;
  puesto?: string | null;
  activo: boolean;
}

export interface RegistroAsistencia {
  id: string;
  empleado_id: string;
  tipo: 'entrada' | 'salida';
  fecha_hora: string;
  metodo: string;
  // Donde estaba el empleado al fichar. Solo viene cuando ficha desde la
  // app; los registros que crea el backend van sin ubicacion.
  ubicacion_lat?: number | null;
  ubicacion_lng?: number | null;
  empleados?: { nombre: string };
}
